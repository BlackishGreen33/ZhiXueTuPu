import * as React from 'react';

import SignInButton from '@/common/components/navbar/SignInButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import { getAuthSession } from '@/common/utils/nextauth';

import Index from './Index';
import Selecter from './Selecter';
import TreeView from './TreeView';

const Quiz: React.FC = async () => {
  const session = await getAuthSession();

  return (
    <>
      {session?.user ? (
        <div className="m-2 mt-24 flex h-auto flex-col gap-3 md:m-10 md:p-10">
          <div className="flex gap-2">
            <h2 className="mr-2 text-3xl font-bold tracking-tight">资源管理</h2>
            <Selecter />
          </div>
          <div className="flex gap-3">
            <TreeView />
            <Index />
          </div>
        </div>
      ) : (
        <div className="m-2 mt-24 flex h-[70vh] items-center justify-center rounded-xl bg-white p-2 md:m-10 md:p-10">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>欢迎进入资源管理🔥!</CardTitle>
              <CardDescription>
                这里是一个属于您的课程资源管理平台！请先在下方登录账号！
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

export default Quiz;
