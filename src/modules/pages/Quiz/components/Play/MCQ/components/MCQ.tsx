import { redirect } from 'next/navigation';
import React from 'react';

import { prisma } from '@/common/utils/db';
import { getAuthSession } from '@/common/utils/nextauth';

import MCQModule from './MCQModule';

interface MCQProps {
  gameId: string;
}

const MCQ: React.FC<MCQProps> = React.memo(async ({ gameId }) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect('/');
  }

  const game = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      questions: {
        select: {
          id: true,
          question: true,
          options: true,
        },
      },
    },
  });
  if (!game || game.gameType === 'open_ended') {
    return redirect('/quiz');
  }

  return (
    <main className="m-2 mt-24 h-auto p-2 md:m-10 md:p-10">
      <MCQModule game={game} />
    </main>
  );
});

export default MCQ;
