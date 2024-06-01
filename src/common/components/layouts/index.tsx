'use client';

import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';

import useStore from '@/common/hooks/useStore';

import { Footer, ThemeSettings } from '../elements';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = React.memo(({ children }) => {
  const {
    setCurrentColor,
    activeMenu,
    themeSettings,
  } = useStore();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode =
      localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setTheme(currentThemeMode);
    }
  }, [setCurrentColor, setTheme]);

  return (
    <>
      <div className={theme === 'Dark' ? 'dark' : ''}>
        <div className="relative flex dark:bg-main-dark-bg">
          {/* <div className="fixed bottom-4 right-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{
                  background: currentColor,
                  borderRadius: '50%',
                }}
                className="p-3 text-3xl text-white hover:bg-light-gray hover:drop-shadow-xl"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div> */}
          <div
            className={`dark:bg-secondary-dark-bg z-[100] ${activeMenu ? 'sidebar fixed w-72 bg-white' : 'w-0'}`}
          >
            <Sidebar />
          </div>
          <div
            className={
              activeMenu
                ? 'min-h-screen w-full bg-main-bg dark:bg-main-dark-bg md:ml-72  '
                : 'flex-2 min-h-screen  w-full bg-main-bg dark:bg-main-dark-bg '
            }
          >
            <div className="navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
});

export default Layout;
