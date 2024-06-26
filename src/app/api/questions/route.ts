import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { MCQQuestions, OpenEndedQuestions } from '@/common/dummy';
import { getQuestionsSchema } from '@/common/schemas/questions';
import { prisma } from '@/common/utils/db';
import { strict_output } from '@/common/utils/gpt';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { amount, topic, type, email } = getQuestionsSchema.parse(body);
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    let questions: any;
    if (type === 'open_ended') {
      if (user?.apiKey !== '' && user?.apiKey) {
        questions = await strict_output(
          'You are a helpful AI that is able to generate a pair of question and answers, the length of each answer should not be more than 15 words, store all the pairs of answers and questions in a JSON array',
          new Array(amount).fill(
            `You are to generate a random hard open-ended questions about ${topic}`
          ),
          {
            question: 'question',
            answer: 'answer with max length of 15 words',
          },
          user?.apiKey
        );
      } else {
        questions = OpenEndedQuestions;
      }
    } else if (type === 'mcq') {
      if (user?.apiKey !== '' && user?.apiKey) {
        questions = await strict_output(
          'You are a helpful AI that is able to generate mcq questions and answers, the length of each answer should not be more than 15 words, store all answers and questions and options in a JSON array',
          new Array(amount).fill(
            `You are to generate a random hard mcq question about ${topic}`
          ),
          {
            question: 'question',
            answer: 'answer with max length of 15 words',
            option1: 'option1 with max length of 15 words',
            option2: 'option2 with max length of 15 words',
            option3: 'option3 with max length of 15 words',
          },
          user?.apiKey
        );
      } else {
        questions = MCQQuestions;
      }
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
