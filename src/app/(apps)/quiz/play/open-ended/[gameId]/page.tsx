import { NextPage } from 'next';

import OpenEnded from '@/modules/apps/Quiz/components/Play/OpenEnded';

type Params = Promise<{ gameId: string }>;
interface PageProps {
  params: Params;
}

const Page: NextPage<PageProps> = async (props) => {
  const params = await props.params;
  const { gameId } = params;

  return <OpenEnded gameId={gameId} />;
};

export default Page;
