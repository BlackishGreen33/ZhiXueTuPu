import SignInButton from '@/common/components/navbar/SignInButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import { getAuthSession } from '@/common/utils/nextauth';

import Files from './Files';
import Info from './Info';
import Note from './Note';
import Recommend from './Recommend';

interface ProfileProps {
  noteId?: string;
}

const Profile: React.FC<ProfileProps> = async ({ noteId }) => {
  const session = await getAuthSession();

  return (
    <>
      {session?.user ? (
        <div className="m-2 mt-24 flex h-auto flex-col gap-4 rounded-xl p-2 md:m-10 md:flex-row md:p-10">
          <Info />
          {noteId ? <Note noteId={noteId} /> : <Files />}
          <Recommend />
        </div>
      ) : (
        <div className="m-2 mt-24 flex h-[70vh] items-center justify-center rounded-xl bg-white p-2 md:m-10 md:p-10">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>欢迎进入个人中心🔥!</CardTitle>
              <CardDescription>
                这里是一个属于您的个人中心！请先在下方登录账号！
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignInButton text="使用 GitHub 账号登陆" />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Profile;
