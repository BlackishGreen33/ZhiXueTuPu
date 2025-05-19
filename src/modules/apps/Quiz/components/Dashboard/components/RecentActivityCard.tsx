import Link from 'next/link';
import { redirect } from 'next/navigation';
import * as React from 'react';

import HistoryComponent from '@/common/components/elements/HistoryComponent';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import { prisma } from '@/common/utils/db';
import { getAuthSession } from '@/common/utils/nextauth';

const RecentActivityCard: React.FC = React.memo(async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect('/');
  }
  const games_count = await prisma.game.count({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          <Link href="/quiz/history">近期活动</Link>
        </CardTitle>
        <CardDescription>你总共进行了 {games_count} 场测验。</CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        <HistoryComponent limit={10} userId={session.user.id} />
      </CardContent>
    </Card>
  );
});

export default RecentActivityCard;
