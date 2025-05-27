// import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface OutputFormat {
  [key: string]: string | string[] | OutputFormat;
}

export async function strict_output(
  system_prompt: string,
  user_prompt: string | string[],
  output_format: OutputFormat,
  apiKey: string,
  default_category: string = '',
  output_value_only: boolean = false,
  model: string = 'gemini-2.0-flash',
  temperature: number = 1,
  num_tries: number = 3,
  verbose: boolean = false
): Promise<
  {
    question: string;
    answer: string;
  }[]
> {
  // const openai = new OpenAI({
  //   apiKey: apiKey,
  // });
  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY!
  );
  const gemeniModel = genAI.getGenerativeModel({ model });

  // if the user input is in a list, we also process the output as a list of json
  const list_input: boolean = Array.isArray(user_prompt);
  // if the output format contains dynamic elements of < or >, then add to the prompt to handle dynamic elements
  const dynamic_elements: boolean = /<.*?>/.test(JSON.stringify(output_format));
  // if the output format contains list elements of [ or ], then we add to the prompt to handle lists
  const list_output: boolean = /\[.*?\]/.test(JSON.stringify(output_format));

  // start off with no error message
  let error_msg: string = '';

  for (let i = 0; i < num_tries; i++) {
    let output_format_prompt: string = `\n你必须输出严格符合规范的JSON格式，遵循以下规则：
    1. 所有属性名和字符串值必须用双引号括起来
    2. 严格按照这个格式输出: ${JSON.stringify(output_format)}
    3. 不要在输出字段中使用引号或转义字符\\`;

    if (list_output) {
      output_format_prompt += `\n如果输出字段是列表，请将输出分类到列表中最合适的元素。`;
    }

    // if output_format contains dynamic elements, process it accordingly
    if (dynamic_elements) {
      output_format_prompt += `\n任何被<和>包围的文本表示你必须生成内容来替换它。示例输入: 去<地点>, 示例输出: 去花园\n任何包含<和>的输出键表示你必须生成键名来替换它。示例输入: {'<地点>': '地点描述'}, 示例输出: {学校: 一个教育的地方}`;
    }

    // if input is in a list format, ask it to generate json in a list
    if (list_input) {
      output_format_prompt += `\n为每个输入元素生成一个json，组成一个json列表。`;
    }

    // Use OpenAI to get a response
    // const response = await openai.chat.completions.create({
    //   temperature: temperature,
    //   model: model,
    //   messages: [
    //     {
    //       role: 'system',
    //       content: system_prompt + output_format_prompt + error_msg,
    //     },
    //     { role: 'user', content: user_prompt.toString() },
    //   ],
    // });
    const result = await gemeniModel.generateContent({
      contents: [
        {
          role: 'user',
          parts: [
            {
              text:
                system_prompt +
                output_format_prompt +
                error_msg +
                '\n\n' +
                user_prompt.toString(),
            },
          ],
        },
      ],
      generationConfig: {
        temperature: temperature,
      },
    });

    let res: string = result.response.text().replace(/'/g, '"') ?? '';

    // Remove Markdown code blocks
    res = res
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    // More strictly fix extra quotes
    // Fix extra quotes after property names (like "question"")
    res = res.replace(/"([^"]+)"":/g, '"$1":');
    // Fix extra quotes before values (like ""value")
    res = res.replace(/:\s*""([^"]+)"/g, ': "$1"');
    // Fix extra quotes after values (like "value"")
    res = res.replace(/"([^"]+)"",/g, '"$1",');
    res = res.replace(/"([^"]+)"":/g, '"$1":');
    res = res.replace(/"([^"]+)"}$/g, '"$1"}');

    // ensure that we don't replace away apostrophes in text
    res = res.replace(/(\w)"(\w)/g, "$1'$2");
    console.log('🚀 ~ res:', res);

    if (verbose) {
      console.log(
        'System prompt:',
        system_prompt + output_format_prompt + error_msg
      );
      console.log('\nUser prompt:', user_prompt);
      console.log('\nGPT response:', res);
    }

    // try-catch block to ensure output format is adhered to
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let output: any = JSON.parse(res);

      if (list_input) {
        if (!Array.isArray(output)) {
          throw new Error('Output format not in a list of json');
        }
      } else {
        output = [output];
      }

      // check for each element in the output_list, the format is correctly adhered to
      for (let index = 0; index < output.length; index++) {
        for (const key in output_format) {
          // unable to ensure accuracy of dynamic output header, so skip it
          if (/<.*?>/.test(key)) {
            continue;
          }

          // if output field missing, raise an error
          if (!(key in output[index])) {
            throw new Error(`${key} not in json output`);
          }

          // check that one of the choices given for the list of words is an unknown
          if (Array.isArray(output_format[key])) {
            const choices = output_format[key] as string[];
            // ensure output is not a list
            if (Array.isArray(output[index][key])) {
              output[index][key] = output[index][key][0];
            }
            // output the default category (if any) if GPT is unable to identify the category
            if (!choices.includes(output[index][key]) && default_category) {
              output[index][key] = default_category;
            }
            // if the output is a description format, get only the label
            if (output[index][key].includes(':')) {
              output[index][key] = output[index][key].split(':')[0];
            }
          }
        }

        // if we just want the values for the outputs
        if (output_value_only) {
          output[index] = Object.values(output[index]);
          // just output without the list if there is only one element
          if (output[index].length === 1) {
            output[index] = output[index][0];
          }
        }
      }

      return list_input ? output : output[0];
    } catch (e) {
      error_msg = `\n\nResult: ${res}\n\nError message: ${e}`;
      console.log('An exception occurred:', e);
      console.log('Current invalid json format:', res);
    }
  }

  return [];
}
