import { NextPage } from 'next';

import MCQ from '@/modules/apps/Quiz/components/Play/MCQ';

interface PageProps {
  params: {
    gameId: string;
  };
}

const Page: NextPage<PageProps> = async ({ params: { gameId } }) => {
  return (
    <>
      <MCQ gameId={gameId} />
    </>
  );
};

export default Page;
