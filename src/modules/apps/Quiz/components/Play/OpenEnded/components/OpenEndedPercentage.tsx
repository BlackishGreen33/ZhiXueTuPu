import * as React from 'react';
import { LuPercent, LuTarget } from 'react-icons/lu';

import { Card } from '@/common/components/ui/card';

interface OpenEndedPercentageProps {
  percentage: number;
}

const PureOpenEndedPercentage: React.FC<OpenEndedPercentageProps> = ({
  percentage,
}) => {
  return (
    <Card className="flex flex-row items-center p-2">
      <LuTarget size={30} />
      <span className="ml-3 text-2xl opacity-75">{percentage}</span>
      <LuPercent className="" size={25} />
    </Card>
  );
};

const OpenEndedPercentage = React.memo(PureOpenEndedPercentage);

export default OpenEndedPercentage;
