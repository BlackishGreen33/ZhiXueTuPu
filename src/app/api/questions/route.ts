import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

// import { MCQQuestions, OpenEndedQuestions } from '@/common/dummy';
import { getQuestionsSchema } from '@/common/schemas/questions';
import { prisma } from '@/common/utils/db';
import { strict_output } from '@/common/utils/gemini';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, topic, type, email } = getQuestionsSchema.parse(body);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let questions: any;
    if (type === 'open_ended') {
      // if (user?.apiKey !== '' && user?.apiKey) {
      questions = await strict_output(
        '你是一个能够生成问答对的AI助手，每个答案的长度不应超过15个字，将所有问答对存储在一个JSON数组中',
        new Array(amount).fill(`请生成关于${topic}的${amount}题随机开放式问题`),
        {
          question: 'question',
          answer: 'answer with max length of 15 words',
        },
        // user?.apiKey
        process.env.GOOGLE_GENERATIVE_AI_API_KEY!
      );
      // } else {
      //   questions = OpenEndedQuestions;
      // }
    } else if (type === 'mcq') {
      // if (user?.apiKey !== '' && user?.apiKey) {
      questions = await strict_output(
        '你是一个能够生成选择题(MCQ)的AI助手，每个答案和选项的长度不应超过15个字，将所有问题、答案和选项存储在一个JSON数组中',
        new Array(amount).fill(`请生成关于${topic}的${amount}题随机选择题`),
        {
          question: 'question',
          answer: 'answer with max length of 15 words',
          option1: 'option1 with max length of 15 words',
          option2: 'option2 with max length of 15 words',
          option3: 'option3 with max length of 15 words',
          option4: 'option4 with max length of 15 words',
        },
        // user?.apiKey
        process.env.GOOGLE_GENERATIVE_AI_API_KEY!
      );
      // } else {
      //   questions = MCQQuestions;
      // }
    }
    return NextResponse.json(
      {
        questions: questions,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        }
      );
    } else {
      console.error('elle gpt error', error);
      return NextResponse.json(
        { error: 'An unexpected error occurred.' },
        {
          status: 500,
        }
      );
    }
  }
}
