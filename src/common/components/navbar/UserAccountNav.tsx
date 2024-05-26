'use client';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import useStore from '@/common/hooks/useStore';

const UserAccountNav: React.FC = React.memo(() => {
  const { handleClick } = useStore();
  const { data: session } = useSession();

  return (
    <TooltipComponent content="Profile" position="BottomCenter">
      <div
        className="flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray"
        onClick={() => handleClick('userProfile')}
      >
        <Image
          className="h-8 w-8 rounded-full"
          // @ts-ignore
          src={session?.user.image}
          alt="user-profile"
          loading="lazy"
          width={200}
          height={200}
        />
        <p>
          <span className="text-14 text-gray-400">您好,</span>{' '}
          <span className="text-14 ml-1 font-bold text-gray-400">
            {session?.user.name}
          </span>
        </p>
        <MdKeyboardArrowDown className="text-14 text-gray-400" />
      </div>
    </TooltipComponent>
  );
});

export default UserAccountNav;
