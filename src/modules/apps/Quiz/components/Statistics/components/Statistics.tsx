import Link from 'next/link';
import { redirect } from 'next/navigation';
import * as React from 'react';
import { LuLayoutDashboard } from 'react-icons/lu';

import { buttonVariants } from '@/common/components/ui/button';
import { prisma } from '@/common/utils/db';
import { getAuthSession } from '@/common/utils/nextauth';

import AccuracyCard from './AccuracyCard';
import QuestionsList from './QuestionsList';
import ResultsCard from './ResultsCard';
import TimeTakenCard from './TimeTakenCard';

interface StatisticsProps {
  gameId: string;
}

const Statistics: React.FC<StatisticsProps> = React.memo(async ({ gameId }) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect('/quiz');
  }
  const game = await prisma.game.findUnique({
    where: { id: gameId },
    include: { questions: true },
  });
  if (!game) {
    return redirect('/quiz');
  }

  let accuracy: number = 0;

  if (game.gameType === 'mcq') {
    let totalCorrect = game.questions.reduce((acc, question) => {
      if (question.isCorrect) {
        return acc + 1;
      }
      return acc;
    }, 0);
    accuracy = (totalCorrect / game.questions.length) * 100;
  } else if (game.gameType === 'open_ended') {
    let totalPercentage = game.questions.reduce((acc, question) => {
      return acc + (question.percentageCorrect ?? 0);
    }, 0);
    accuracy = totalPercentage / game.questions.length;
  }
  accuracy = Math.round(accuracy * 100) / 100;

  return (
    <main className="m-2 mt-24 h-auto rounded-xl bg-white p-2 md:m-10 md:p-10">
      <div className="mx-auto max-w-7xl p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">总结</h2>
          <div className="flex items-center space-x-2">
            <Link href="/quiz/dashboard" className={buttonVariants()}>
              <LuLayoutDashboard className="mr-2" />
              返回测验仪表盘
            </Link>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-7">
          <ResultsCard accuracy={accuracy} />
          <AccuracyCard accuracy={accuracy} />
          <TimeTakenCard
            timeEnded={new Date(game.timeEnded ?? 0)}
            timeStarted={new Date(game.timeStarted ?? 0)}
          />
        </div>
        <QuestionsList questions={game.questions} />
      </div>
    </main>
  );
});

export default Statistics;
