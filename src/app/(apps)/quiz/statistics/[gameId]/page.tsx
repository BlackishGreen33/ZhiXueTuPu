import { NextPage } from 'next';

import Statistics from '@/modules/apps/Quiz/components/Statistics';

type Params = Promise<{ gameId: string }>;
interface PageProps {
  params: Params;
}

const Page: NextPage<PageProps> = async (props) => {
  const params = await props.params;
  const { gameId } = params;

  return <Statistics gameId={gameId} />;
};

export default Page;
