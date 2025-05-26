'use client';

// eslint-disable-next-line simple-import-sort/imports
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import * as React from 'react';

const Basic: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { data: session } = useSession();

  const ut = '学生';

  return (
    <div className="relative w-full">
      <Image
        width={1000}
        height={1000}
        className="h-28 w-28 rounded-full object-cover"
        src={session?.user ? (session.user.image as string) : ''}
        alt="avatar"
        loading="lazy"
      />
      <div
        onClick={() => setOpen(!open)}
        className="absolute left-24 top-20 h-3 w-3 animate-pulse cursor-pointer rounded-full bg-lime-400"
      />
      {open && (
        <div className="absolute right-12 top-[4.7rem] flex h-5 w-fit items-center justify-center rounded-2xl border border-lime-400 px-2">
          <p className="text-[9px] text-lime-300">正在线上</p>
        </div>
      )}
      <h1 className="mt-3 text-xl font-bold text-neutral-700 dark:text-neutral-300">
        {session?.user ? session.user.name : '尚未登录'}
      </h1>
      <p className="font-RubikMedium mt-2 text-xs text-neutral-700 dark:text-neutral-300">
        {session?.user ? session.user.email : '114514@email.com'} 📧
      </p>
      <p className="font-RubikMedium mt-1 text-nowrap text-xs text-neutral-700 dark:text-neutral-300">
        {session?.expires
          ? (session.expires as string)
          : '1970-01-01T00:00:00.000Z '}
        🌍
      </p>
      <div className="flex w-full">
        <div className="my-4 flex gap-x-1 text-xs">
          <p className="flex h-5 items-center justify-center text-nowrap rounded-md bg-green-200 px-2 text-[11px] text-neutral-700 dark:text-neutral-300">
            {ut}
          </p>
          <p className="flex h-5 items-center justify-center text-nowrap rounded-md bg-gray-200 px-2 text-[11px] text-neutral-700 dark:bg-gray-800 dark:text-neutral-300">
            计算机
          </p>
          <p className="flex h-5 items-center justify-center text-nowrap rounded-md bg-gray-200 px-2 text-[11px] text-neutral-700 dark:bg-gray-800 dark:text-neutral-300">
            软件工程
          </p>
        </div>
      </div>
    </div>
  );
};

export default Basic;
