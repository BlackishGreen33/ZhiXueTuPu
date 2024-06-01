import { NextPage } from 'next';

import Profile from '@/modules/account/Profile';

interface PageProps {
  params: {
    noteId: string;
  };
}

const Page: NextPage<PageProps> = async ({ params: { noteId } }) => {
  return (
    <>
      <Profile noteId={noteId} />
    </>
  );
};

export default Page;
