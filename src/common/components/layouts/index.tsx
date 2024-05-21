'use client';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';

// import { Footer, Navbar, Sidebar, ThemeSettings } from './components';
// import { useStateContext } from './contexts/ContextProvider';
// import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Ecommerce, Editor,Employees, Financial, Kanban, Line, Orders, Pie, Pyramid, Stacked } from './pages';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();
  setTheme(resolvedTheme!);

  // const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      // setCurrentColor(currentThemeColor);
      // setCurrentMode(currentThemeMode);
    }
  }, []);

  const activeMenu = true;

  return (
    <>
      <div
      // className={currentMode === 'Dark' ? 'dark' : ''}
      >
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed bottom-4 right-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings">
              <button
                type="button"
                // onClick={() => setThemeSettings(true)}
                style={{
                  // background: currentColor,
                  background: 'blue',
                  borderRadius: '50%',
                }}
                className="p-3 text-3xl text-white hover:bg-light-gray hover:drop-shadow-xl"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="sidebar fixed w-72 bg-white dark:bg-secondary-dark-bg ">
              {/* <Sidebar /> */}
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {/* <Sidebar /> */}
              Sidebar
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'min-h-screen  w-full bg-main-bg dark:bg-main-dark-bg md:ml-72  '
                : 'flex-2 min-h-screen  w-full bg-main-bg dark:bg-main-dark-bg '
            }
          >
            <div className="navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static ">
              {/* <Navbar /> */}
              Navbar
            </div>
            <div>
              {/* {themeSettings && <ThemeSettings />} */}
              {children}
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
