'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { LuHistory } from 'react-icons/lu';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';

const HistoryCard: React.FC = React.memo(() => {
  const router = useRouter();

  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={() => {
        router.push('/quiz/history');
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">历史回顾</CardTitle>
        <LuHistory size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          查看过去的参与过的测验记录。
        </p>
      </CardContent>
    </Card>
  );
});

export default HistoryCard;
