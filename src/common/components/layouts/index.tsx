'use client';

import { useMediaQuery } from '@react-hook/media-query';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';

import useStore from '@/common/hooks/useStore';

import { Footer, ThemeSettings } from '../elements';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { Toaster } from '../ui/toaster';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = React.memo(({ children }) => {
  const { setCurrentColor, activeMenu } = useStore();
  const { setTheme, theme } = useTheme();
  const isMDScreen = useMediaQuery('(min-width: 768px)');

  const chatbotScript = `
  <script>
window.embeddedChatbotConfig = {
chatbotId: "yywnk94ZYc4X6DzPiNKFv",
domain: "www.chatbase.co"
}
</script>
<script
src="https://www.chatbase.co/embed.min.js"
chatbotId="yywnk94ZYc4X6DzPiNKFv"
domain="www.chatbase.co"
defer>
</script>
`;

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
          <motion.div
            className={`z-[10] dark:bg-secondary-dark-bg ${activeMenu && 'sidebar fixed w-72 bg-white'}`}
            animate={{
              x: activeMenu ? 0 : -100,
              opacity: activeMenu ? 1 : 0,
              transition: {
                duration: 0.5,
                delay: 0.1,
                type: 'tween',
                stiffness: 200,
              },
            }}
          >
            <Sidebar />
          </motion.div>
          <motion.div
            className={
              activeMenu
                ? 'min-h-screen w-full bg-main-bg dark:bg-main-dark-bg md:pl-72'
                : 'flex-2 min-h-screen w-full bg-main-bg dark:bg-main-dark-bg'
            }
            animate={{
              padding: activeMenu && isMDScreen ? '0 0 0 288px' : '0',
              transition: {
                duration: 0.5,
                type: 'tween',
                stiffness: 200,
              },
            }}
          >
            <div className="navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static ">
              <Navbar />
            </div>
            <div>
              <ThemeSettings />
              {children}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: chatbotScript }}
              className="z-[1000]"
            />
            <Footer />
            <Toaster />
          </motion.div>
        </div>
      </div>
    </>
  );
});

export default Layout;
