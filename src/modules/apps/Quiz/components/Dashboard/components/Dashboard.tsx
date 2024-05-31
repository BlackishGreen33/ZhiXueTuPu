import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

import DetailsDialog from './DetailsDialog';
import HistoryCard from './HistoryCard';
import HotTopicsCard from './HotTopicsCard';
import QuizMeCard from './QuizMeCard';
import RecentActivityCard from './RecentActivityCard';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = React.memo(async () => {
  const session = await getServerSession();
  if (!session?.user) {
    redirect('/quiz');
  }

  return (
    <main className="m-2 mt-24 h-auto rounded-xl bg-white p-2 md:m-10 md:p-10 dark:bg-black">
      <div className="mx-auto max-w-7xl p-8">
        <div className="flex items-center">
          <h2 className="mr-2 text-3xl font-bold tracking-tight">仪表盘</h2>
          <DetailsDialog />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <QuizMeCard />
          <HistoryCard />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <HotTopicsCard />
          <RecentActivityCard />
        </div>
      </div>
    </main>
  );
});

export default Dashboard;
