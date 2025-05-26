import { NextPage } from 'next';

import Creation from '@/modules/apps/Quiz/components/Creation';

type Params = Promise<{ topic?: string }>;
interface PageProps {
  searchParams: Params;
}

const Page: NextPage<PageProps> = async (props) => {
  const searchParams = await props.searchParams;

  return <Creation searchParams={searchParams} />;
};

export default Page;
