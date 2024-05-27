import { NextPage } from 'next';

import Statistics from '@/modules/pages/Quiz/components/Statistics';

interface PageProps {
  params: {
    gameId: string;
  };
}

const Page: NextPage<PageProps> = async ({ params: { gameId } }) => {
  return (
    <>
      <Statistics gameId={gameId} />
    </>
  );
};

export default Page;
