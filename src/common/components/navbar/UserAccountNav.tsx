'use client';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import type { User } from 'next-auth';
import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import useStore from '@/common/hooks/useStore';

type UserAccountNavProps = {
  user: Pick<User, 'name' | 'image' | 'email'>;
};

const UserAccountNav: React.FC<UserAccountNavProps> = React.memo(({ user }) => {
  const { handleClick } = useStore();

  return (
    <TooltipComponent content="个人档案" position="BottomCenter">
      <div
        className="flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray"
        onClick={() => handleClick('userProfile')}
      >
        <Image
          className="h-8 w-8 rounded-full"
          // @ts-ignore
          src={user.image}
          alt="user-profile"
          loading="lazy"
          width={200}
          height={200}
        />
        <p>
          <span className="text-14 text-gray-400">您好,</span>{' '}
          <span className="text-14 ml-1 font-bold text-gray-400">
            {user.name}
          </span>
        </p>
        <MdKeyboardArrowDown className="text-14 text-gray-400" />
      </div>
    </TooltipComponent>
  );
});

export default UserAccountNav;
