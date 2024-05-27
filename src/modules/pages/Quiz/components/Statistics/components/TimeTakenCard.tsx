import { differenceInSeconds } from 'date-fns';
import React from 'react';
import { LuHourglass } from 'react-icons/lu';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import { formatTimeDelta } from '@/common/utils/utils';

interface TimeTakenCardProps {
  timeEnded: Date;
  timeStarted: Date;
}

const TimeTakenCard: React.FC<TimeTakenCardProps> = React.memo(
  ({ timeEnded, timeStarted }) => {
    return (
      <Card className="md:col-span-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">花费时间</CardTitle>
          <LuHourglass className="text-3xl" />
        </CardHeader>
        <CardContent>
          <div className="text-sm font-medium">
            {formatTimeDelta(differenceInSeconds(timeEnded, timeStarted))}
          </div>
        </CardContent>
      </Card>
    );
  }
);

export default TimeTakenCard;
