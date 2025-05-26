'use client';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';

import useStore from '@/common/hooks/useStore';

interface NavButtonProps {
  title: string;
  custom?: 'chat' | 'cart' | 'userProfile' | 'notification';
  icon: React.ReactNode;
  dotColor?: string;
}

const PureNavButton: React.FC<NavButtonProps> = ({
  title,
  custom,
  icon,
  dotColor,
}) => {
  const { currentColor, activeMenu, setActiveMenu, handleClick } = useStore();

  const handleActiveMenu = useCallback(
    () => setActiveMenu(!activeMenu),
    [activeMenu, setActiveMenu]
  );

  return (
    <TooltipComponent content={title} position="BottomCenter">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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
      </motion.button>
    </TooltipComponent>
  );
};

const NavButton = React.memo(PureNavButton);

export default NavButton;
