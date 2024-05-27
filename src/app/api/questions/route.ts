import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { getQuestionsSchema } from '@/common/schemas/questions';
import { getAuthSession } from '@/common/utils/nextauth';

// export const runtime = 'nodejs';
// export const maxDuration = 500;

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    // if (!session?.user) {
    //   return NextResponse.json(
    //     { error: "You must be logged in to create a game." },
    //     {
    //       status: 401,
    //     }
    //   );
    // }
    const body = await req.json();
    const { amount, topic, type } = getQuestionsSchema.parse(body);
    let questions: any;
    if (type === 'open_ended') {
      // questions = await strict_output(
      //   'You are a helpful AI that is able to generate a pair of question and answers, the length of each answer should not be more than 15 words, store all the pairs of answers and questions in a JSON array',
      //   new Array(amount).fill(
      //     `You are to generate a random hard open-ended questions about ${topic}`
      //   ),
      //   {
      //     question: 'question',
      //     answer: 'answer with max length of 15 words',
      //   }
      // );
      questions = {
        questions: [
          {
            question:
              'What are some advanced techniques front-end developers can use to optimize website performance?',
            answer:
              'Minify code, lazy loading, optimize images, reduce HTTP requests.',
          },
          {
            question:
              'How can front-end developers ensure a responsive design that works well across devices?',
            answer:
              'Use media queries, flexible grids, viewport meta tag, test on various devices.',
          },
          {
            question:
              'What are some key skills or tools front-end developers should master to stay current in the field?',
            answer:
              'HTML, CSS, JavaScript, responsive design, version control (Git), front-end frameworks.',
          },
          {
            question:
              'How can front-end developers improve accessibility on websites for users with disabilities?',
            answer:
              'Use semantic HTML, ARIA attributes, provide text alternatives, test with screen readers.',
          },
        ],
      };
    } else if (type === 'mcq') {
      // questions = await strict_output(
      //   'You are a helpful AI that is able to generate mcq questions and answers, the length of each answer should not be more than 15 words, store all answers and questions and options in a JSON array',
      //   new Array(amount).fill(
      //     `You are to generate a random hard mcq question about ${topic}`
      //   ),
      //   {
      //     question: 'question',
      //     answer: 'answer with max length of 15 words',
      //     option1: 'option1 with max length of 15 words',
      //     option2: 'option2 with max length of 15 words',
      //     option3: 'option3 with max length of 15 words',
      //   }
      // );
      questions = {
        questions: [
          {
            question:
              'What common design pattern is used in front-end development?',
            answer: 'Model-View-Controller (MVC)',
            option1: 'Singleton',
            option2: 'Observer',
            option3: 'Adapter',
          },
        ],
      };
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
