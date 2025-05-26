'use client';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { motion } from 'framer-motion';
import type { User } from 'next-auth';
import Image from 'next/image';
import * as React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import useStore from '@/common/hooks/useStore';

type UserAccountNavProps = {
  user: Pick<User, 'name' | 'image' | 'email'>;
};

const PureUserAccountNav: React.FC<UserAccountNavProps> = ({ user }) => {
  const { handleClick } = useStore();

  return (
    <TooltipComponent content="个人档案" position="BottomCenter">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray"
        onClick={() => handleClick('userProfile')}
      >
        <Image
          className="h-8 w-8 rounded-full"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
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
      </motion.div>
    </TooltipComponent>
  );
};

const UserAccountNav = React.memo(PureUserAccountNav);

export default UserAccountNav;
