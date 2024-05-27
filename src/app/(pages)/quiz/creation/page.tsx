import { NextPage } from 'next';

import Creation from '@/modules/pages/Quiz/components/Creation';

interface PageProps {
  searchParams: {
    topic?: string;
  };
}

const Page: NextPage<PageProps> = async ({ searchParams }) => {
  return (
    <>
      <Creation searchParams={searchParams} />
    </>
  );
};

export default Page;
