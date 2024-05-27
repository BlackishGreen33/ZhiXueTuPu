'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { LuBrainCircuit } from 'react-icons/lu';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';

const QuizMeCard: React.FC = React.memo(() => {
  const router = useRouter();

  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={() => {
        router.push('/quiz/creation');
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">挑战测验！</CardTitle>
        <LuBrainCircuit size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          挑战自己，参加一个您选择的主题的测验。
        </p>
      </CardContent>
    </Card>
  );
});

export default QuizMeCard;
