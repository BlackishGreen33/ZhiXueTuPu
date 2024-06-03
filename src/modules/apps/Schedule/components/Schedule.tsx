import React from 'react';

import SignInButton from '@/common/components/navbar/SignInButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import { getAuthSession } from '@/common/utils/nextauth';

import Calendar from './Calendar';

const Schedule: React.FC = React.memo(async () => {
  const session = await getAuthSession();

  return (
    <>
      {session?.user ? (
        <Calendar />
      ) : (
        <div className="m-2 mt-24 flex h-[70vh] items-center justify-center rounded-xl bg-white p-2 md:m-10 md:p-10">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>欢迎进入日程管理🔥!</CardTitle>
              <CardDescription>
                这里是一个属于您的学习日程管理平台！请先在下方登录账号！
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
});

export default Schedule;
