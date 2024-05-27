import Link from 'next/link';
import React from 'react';
import { LuClipboardEdit, LuClock, LuCopyCheck } from 'react-icons/lu';

import { prisma } from '@/common/utils/db';

interface HistoryComponentProps {
  limit: number;
  userId: string;
}

const HistoryComponent: React.FC<HistoryComponentProps> = React.memo(
  async ({ limit, userId }) => {
    const games = await prisma.game.findMany({
      take: limit,
      where: {
        userId,
      },
      orderBy: {
        timeStarted: 'desc',
      },
    });

    return (
      <div className="space-y-8">
        {games.map((game) => {
          return (
            <div className="flex items-center justify-between" key={game.id}>
              <div className="flex items-center">
                {game.gameType === 'mcq' ? (
                  <LuCopyCheck className="mr-3" />
                ) : (
                  <LuClipboardEdit className="mr-3" />
                )}
                <div className="ml-4 space-y-1">
                  <Link
                    className="text-base font-medium leading-none underline"
                    href={`/quiz/statistics/${game.id}`}
                  >
                    {game.topic}
                  </Link>
                  <p className="flex w-fit items-center rounded-lg bg-slate-800 px-2 py-1 text-xs text-white">
                    <LuClock className="mr-1 h-4 w-4" />
                    {new Date(game.timeEnded ?? 0).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {game.gameType === 'mcq' ? '选择题' : '填空题'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

export default HistoryComponent;
