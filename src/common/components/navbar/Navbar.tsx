'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';

import NavAuth from './NavAuth';
import NavButton from './NavButton';
import Resize from './Resize';

const Navbar: React.FC = React.memo(() => {
  const { data: session } = useSession();

  return (
    <div className="relative flex justify-between p-2 md:ml-6 md:mr-6">
      <NavButton title="菜单" icon={<AiOutlineMenu />} />
      <div className="flex">
        {/* <NavButton title="购物车" custom="cart" icon={<FiShoppingCart />} /> */}
        {/* <NavButton
          title="信息"
          dotColor="#03C9D7"
          custom="chat"
          icon={<BsChatLeft />}
        /> */}
        {session?.user && (
          <NavButton
            title="通知"
            dotColor="rgb(254, 201, 15)"
            custom="notification"
            icon={<RiNotification3Line />}
          />
        )}
        <NavAuth />
        <Resize />
      </div>
    </div>
  );
});

export default Navbar;
