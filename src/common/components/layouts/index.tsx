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
        <div className="dark:bg-main-dark-bg relative flex">
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
                className="hover:bg-light-gray p-3 text-3xl text-white hover:drop-shadow-xl"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="sidebar dark:bg-secondary-dark-bg fixed w-72 bg-white ">
              {/* <Sidebar /> */}
              Sidebar
            </div>
          ) : (
            <div className="dark:bg-secondary-dark-bg w-0">
              {/* <Sidebar /> */}
              Sidebar
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full md:ml-72  '
                : 'bg-main-bg dark:bg-main-dark-bg  flex-2 min-h-screen w-full '
            }
          >
            <div className="bg-main-bg dark:bg-main-dark-bg navbar fixed w-full md:static ">
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
