import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { apiKeySchema } from '@/common/schemas/apiKey';
import { prisma } from '@/common/utils/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { apiKey, email } = apiKeySchema.parse(body);
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      return NextResponse.json(
        {
          message: 'User not found',
        },
        {
          status: 404,
        }
      );
    }
    await prisma.user.update({
      where: { email: email },
      data: { apiKey: apiKey },
    });
    return NextResponse.json(
      {
        message: 'ApiKey Setting Success',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: error.issues,
        },
        {
          status: 400,
        }
      );
    }
  }
}
