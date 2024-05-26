'use client';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React, { useCallback } from 'react';

import useStore from '@/common/hooks/useStore';

interface NavButtonProps {
  title: string;
  custom?: 'chat' | 'cart' | 'userProfile' | 'notification';
  icon: React.ReactNode;
  dotColor?: string;
}

const NavButton: React.FC<NavButtonProps> = React.memo(
  ({ title, custom, icon, dotColor }) => {
    const { currentColor, activeMenu, setActiveMenu, handleClick } = useStore();

    const handleActiveMenu = useCallback(
      () => setActiveMenu(!activeMenu),
      [activeMenu, setActiveMenu]
    );

    return (
      <TooltipComponent content={title} position="BottomCenter">
        <button
          type="button"
          onClick={custom ? () => handleClick(custom) : handleActiveMenu}
          style={{ color: currentColor }}
          className="relative rounded-full p-3 text-xl hover:bg-light-gray"
        >
          <span
            style={{ background: dotColor }}
            className="absolute right-2 top-2 inline-flex h-2 w-2 rounded-full"
          />
          {icon}
        </button>
      </TooltipComponent>
    );
  }
);

export default NavButton;
