// eslint-disable-next-line simple-import-sort/imports
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import DetailsDialog from './DetailsDialog';
import HistoryCard from './HistoryCard';
import HotTopicsCard from './HotTopicsCard';
import QuizMeCard from './QuizMeCard';
import RecentActivityCard from './RecentActivityCard';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = async () => {
  const session = await getServerSession();
  if (!session?.user) {
    redirect('/quiz');
  }

  return (
    <main className="rounded-x m-2 mt-24 h-auto p-2 dark:bg-black md:m-10 md:p-10">
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
};

export default Dashboard;
