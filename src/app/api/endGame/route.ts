import { NextResponse } from 'next/server';

import { endGameSchema } from '@/common/schemas/questions';
import { prisma } from '@/common/utils/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { gameId } = endGameSchema.parse(body);

    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
    });
    if (!game) {
      return NextResponse.json(
        {
          message: 'Game not found',
        },
        {
          status: 404,
        }
      );
    }
    await prisma.game.update({
      where: {
        id: gameId,
      },
      data: {
        timeEnded: new Date(),
      },
    });
    return NextResponse.json({
      message: 'Game ended',
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something went wrong',
      },
      { status: 500 }
    );
  }
}
