import * as React from 'react';
import { LuAward, LuTrophy } from 'react-icons/lu';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';

interface ResultsCardProps {
  accuracy: number;
}

const PureResultsCard: React.FC<ResultsCardProps> = ({ accuracy }) => (
  <Card className="md:col-span-7">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
      <CardTitle className="text-2xl font-bold">结果</CardTitle>
      <LuAward className="text-3xl" />
    </CardHeader>
    <CardContent className="flex h-3/5 flex-col items-center justify-center">
      {accuracy > 75 ? (
        <>
          <LuTrophy className="mr-4" stroke="gold" size={50} />
          <div className="flex flex-col text-2xl font-semibold text-yellow-400">
            <span className="">你好厉害！</span>
            <span className="text-center text-sm text-black opacity-50">
              {'> 75% accuracy'}
            </span>
          </div>
        </>
      ) : accuracy > 25 ? (
        <>
          <LuTrophy className="mr-4" stroke="silver" size={50} />
          <div className="flex flex-col text-2xl font-semibold text-stone-400">
            <span className="">做的好！</span>
            <span className="text-center text-sm text-black opacity-50">
              {'> 25% accuracy'}
            </span>
          </div>
        </>
      ) : (
        <>
          <LuTrophy className="mr-4" stroke="brown" size={50} />
          <div className="flex flex-col text-2xl font-semibold text-yellow-800">
            <span className="">不错的尝试！</span>
            <span className="text-center text-sm text-black opacity-50">
              {'< 25% accuracy'}
            </span>
          </div>
        </>
      )}
    </CardContent>
  </Card>
);

const ResultsCard = React.memo(PureResultsCard);

export default ResultsCard;
