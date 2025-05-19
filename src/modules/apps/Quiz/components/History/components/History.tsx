import Link from 'next/link';
import { redirect } from 'next/navigation';
import * as React from 'react';
import { LuLayoutDashboard } from 'react-icons/lu';

import HistoryComponent from '@/common/components/elements/HistoryComponent';
import { buttonVariants } from '@/common/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import { getAuthSession } from '@/common/utils/nextauth';

const Creation: React.FC = React.memo(async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect('/quiz');
  }

  return (
    <main className="m-2 mt-24 flex h-auto items-center justify-center p-2 md:m-10 md:p-10">
      <div className="w-[400px]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">历史纪录</CardTitle>
              <Link className={buttonVariants()} href="/quiz/dashboard">
                <LuLayoutDashboard className="mr-2" />
                返回仪表盘
              </Link>
            </div>
          </CardHeader>
          <CardContent className="max-h-[60vh] overflow-scroll">
            <HistoryComponent limit={100} userId={session.user.id} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
});

export default Creation;
