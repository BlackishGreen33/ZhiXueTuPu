'use client';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { motion } from 'framer-motion';
import * as React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import useStore from '@/common/hooks/useStore';

import Logo from './Logo';

const TopArea: React.FC = () => {
  const { currentColor, activeMenu, setActiveMenu } = useStore();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-between"
    >
      <Logo />
      <TooltipComponent content="Menu" position="BottomCenter">
        <button
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
          style={{ color: currentColor }}
          className="mt-4 block rounded-full p-3 text-xl hover:bg-light-gray md:hidden"
        >
          <MdOutlineCancel />
        </button>
      </TooltipComponent>
    </motion.div>
  );
};

export default TopArea;
