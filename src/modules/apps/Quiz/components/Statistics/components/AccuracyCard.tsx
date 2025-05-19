import * as React from 'react';
import { LuTarget } from 'react-icons/lu';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';

interface AccuracyCardProps {
  accuracy: number;
}

const AccuracyCard: React.FC<AccuracyCardProps> = React.memo(({ accuracy }) => {
  accuracy = Math.round(accuracy * 100) / 100;

  return (
    <Card className="md:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">平均准确率</CardTitle>
        <LuTarget className="text-3xl" />
      </CardHeader>
      <CardContent>
        <div className="text-sm font-medium">{accuracy.toString() + '%'}</div>
      </CardContent>
    </Card>
  );
});

export default AccuracyCard;
