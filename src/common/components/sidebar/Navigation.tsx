'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

import { links } from '@/common/dummy/dummy';
import useStore from '@/common/hooks/useStore';

import NavLink from '../elements/NavLink';

const Navigation: React.FC = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    screenSize,
    setThemeSettings,
    themeSettings,
  } = useStore();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize! <= 900) {
      setActiveMenu(false);
    }
  };

  const activeSettings =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 cursor-pointer';
  const normalSettings =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 cursor-pointer';

  return (
    <div className="mt-10">
      {links.map((item) => (
        <div key={item.title}>
          <p className="m-3 mt-4 uppercase text-gray-400 dark:text-gray-400">
            {item.title}
          </p>
          {item.links.map((link, index) =>
            link.nav === 'settings' ? (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={
                  themeSettings ? `${activeSettings} active` : normalSettings
                }
                style={{ backgroundColor: themeSettings ? currentColor : '' }}
                onClick={() => {
                  setThemeSettings(true);
                }}
              >
                {link.icon}
                <span className="capitalize">{link.name}</span>
              </motion.div>
            ) : (
              <NavLink
                href={link.name === '智能教学' ? link.nav : `/${link.nav}`}
                key={link.nav}
                onClick={handleCloseSideBar}
                currentColor={currentColor}
              >
                {link.icon}
                <span className="capitalize">{link.name}</span>
              </NavLink>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
