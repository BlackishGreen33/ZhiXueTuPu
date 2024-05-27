import { Separator } from '@radix-ui/react-separator';
import React from 'react';
import { LuCheckCircle2, LuXCircle } from 'react-icons/lu';

import { Card } from '@/common/components/ui/card';

interface MCQCounterProps {
  correct_answers: number;
  wrong_answers: number;
}

const MCQCounter: React.FC<MCQCounterProps> = React.memo(
  ({ correct_answers, wrong_answers }) => {
    return (
      <Card className="flex flex-row items-center justify-center p-2">
        <LuCheckCircle2 color="green" size={30} />
        <span className="mx-3 text-2xl text-[green]">{correct_answers}</span>

        <Separator orientation="vertical" />

        <span className="mx-3 text-2xl text-[red]">{wrong_answers}</span>
        <LuXCircle color="red" size={30} />
      </Card>
    );
  }
);

export default MCQCounter;
