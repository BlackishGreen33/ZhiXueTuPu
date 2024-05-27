import { NextPage } from 'next';

import OpenEnded from '@/modules/apps/Quiz/components/Play/OpenEnded';

interface PageProps {
  params: {
    gameId: string;
  };
}

const Page: NextPage<PageProps> = async ({ params: { gameId } }) => {
  return (
    <>
      <OpenEnded gameId={gameId} />
    </>
  );
};

export default Page;
