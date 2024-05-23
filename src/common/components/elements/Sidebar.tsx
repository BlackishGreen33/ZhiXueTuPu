import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Link from 'next/link';
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';

import useStore from '@/common/hooks/useStore';

import NavLink from './NavLink';
import { links } from '../../../../public/assets/dummy';

const Sidebar: React.FC = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStore();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize! <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={handleCloseSideBar}
              className="ml-3 mt-4 flex items-center gap-3 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware /> <span>智学图谱</span>
            </Link>
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
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="m-3 mt-4 uppercase text-gray-400 dark:text-gray-400">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    href={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    currentColor={currentColor}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
