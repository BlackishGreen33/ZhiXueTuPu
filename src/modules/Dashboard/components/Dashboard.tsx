import { getAuthSession } from '@/common/utils/nextauth';
import React from 'react';

import SignInButton from '@/common/components/navbar/SignInButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';

import Enter from './Enter';
import Periodically from './Periodically';
import Revenue from './Revenue';
import Transactions from './Transactions';

const Dashboard: React.FC = React.memo(async () => {
  const session = await getAuthSession();

  return (
    <>
      {session?.user ? (
        <div className="mt-24">
          <Enter />
          <Revenue />
          <Transactions />
          <Periodically />
        </div>
      ) : (
        <div className="m-2 mt-24 flex h-[70vh] items-center justify-center rounded-xl bg-white p-2 md:m-10 md:p-10">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>欢迎进入综合仪表盘🔥!</CardTitle>
              <CardDescription>
                这里是一个属于您的学习分析仪表盘！请先在下方登录账号！
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

export default Dashboard;
