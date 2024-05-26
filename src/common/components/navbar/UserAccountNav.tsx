'use client';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import useStore from '@/common/hooks/useStore';

const UserAccountNav: React.FC = React.memo(() => {
  const { handleClick } = useStore();

  const avatar = './assets/avatar.jpg';

  return (
    <TooltipComponent content="Profile" position="BottomCenter">
      <div
        className="flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray"
        onClick={() => handleClick('userProfile')}
      >
        <Image
          className="h-8 w-8 rounded-full"
          src={avatar}
          alt="user-profile"
          loading="lazy"
          width={200}
          height={200}
        />
        <p>
          <span className="text-14 text-gray-400">您好,</span>{' '}
          <span className="text-14 ml-1 font-bold text-gray-400">李泽群</span>
        </p>
        <MdKeyboardArrowDown className="text-14 text-gray-400" />
      </div>
    </TooltipComponent>
  );
});

export default UserAccountNav;
