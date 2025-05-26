import { NextPage } from 'next';

import Profile from '@/modules/account/Profile';

type Params = Promise<{ noteId: string }>;
interface PageProps {
  params: Params;
}

const Page: NextPage<PageProps> = async (props) => {
  const params = await props.params;
  const { noteId } = params;

  return <Profile noteId={noteId} />;
};

export default Page;
