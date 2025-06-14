'use client';

import Link from 'next/link';
import * as React from 'react';
import { SiShopware } from 'react-icons/si';

import useStore from '@/common/hooks/useStore';

const Logo: React.FC = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStore();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize! <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <Link
      href="/"
      onClick={handleCloseSideBar}
      style={{ color: currentColor }}
      className="ml-3 mt-4 flex items-center gap-3 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
    >
      <SiShopware /> <span>智学图谱</span>
    </Link>
  );
};

export default Logo;
