import { NextPage } from 'next';

import MCQ from '@/modules/apps/Quiz/components/Play/MCQ';

type Params = Promise<{ gameId: string }>;
interface PageProps {
  params: Params;
}

const Page: NextPage<PageProps> = async (props) => {
  const params = await props.params;
  const { gameId } = params;

  return <MCQ gameId={gameId} />;
};

export default Page;
