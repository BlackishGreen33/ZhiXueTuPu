import { redirect } from 'next/navigation';
import React from 'react';

import { prisma } from '@/common/utils/db';
import { getAuthSession } from '@/common/utils/nextauth';

import OpenEndedModules from './OpenEndedModules';

interface OpenEndedProps {
  gameId: string;
}

const OpenEnded: React.FC<OpenEndedProps> = React.memo(async ({ gameId }) => {
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
          answer: true,
        },
      },
    },
  });
  if (!game || game.gameType === 'mcq') {
    return redirect('/quiz');
  }

  return (
    <main className="m-2 mt-24 h-auto p-2 md:m-10 md:p-10">
      <OpenEndedModules game={game} />
    </main>
  );
});

export default OpenEnded;
