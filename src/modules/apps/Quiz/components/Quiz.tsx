import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

import SignInButton from '@/common/components/navbar/SignInButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';

const Quiz: React.FC = React.memo(async () => {
  const session = await getServerSession();
  if (session?.user) {
    redirect('/quiz/dashboard');
  }

  return (
    <div className="m-2 mt-24 flex h-[70vh] items-center justify-center rounded-xl bg-white p-2 md:m-10 md:p-10">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>欢迎进入测验平台 🔥!</CardTitle>
          <CardDescription>
            这里是一个 AI 创建测验的平台！请先在下方登录账号！
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="使用 GitHub 账号登陆" />
        </CardContent>
      </Card>
    </div>
  );
});

export default Quiz;
