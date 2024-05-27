import React from 'react';

import { Card } from '@/common/components/ui/card';
import { LuPercent, LuTarget } from 'react-icons/lu';

interface OpenEndedPercentageProps {
  percentage: number;
}

const OpenEndedPercentage: React.FC<OpenEndedPercentageProps> = React.memo(
  ({ percentage }) => {
    return (
      <Card className="flex flex-row items-center p-2">
        <LuTarget size={30} />
        <span className="ml-3 text-2xl opacity-75">{percentage}</span>
        <LuPercent className="" size={25} />
      </Card>
    );
  }
);

export default OpenEndedPercentage;
