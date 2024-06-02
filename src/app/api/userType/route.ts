import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { userTypeSchema } from '@/common/schemas/userType';
import { prisma } from '@/common/utils/db';

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { userType, email } = userTypeSchema.parse(body);
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
      data: { type: userType },
    });
    return NextResponse.json(
      {
        message: 'UserType Setting Success',
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
