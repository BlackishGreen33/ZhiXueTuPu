import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';

import { themeColors } from '@/common/assets/dummy';
import useStore from '@/common/hooks/useStore';

const ThemeSettings = React.memo(() => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    currentColor,
    setThemeSettings,
  } = useStore();

  return (
    <div className="nav-item fixed right-0 top-0 w-screen bg-half-transparent">
      <div className="float-right h-screen w-400  bg-white dark:bg-[#484B52] dark:text-gray-200">
        <div className="ml-4 flex items-center justify-between p-4">
          <p className="text-lg font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="p-3 text-2xl hover:bg-light-gray hover:drop-shadow-xl"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="ml-4 flex-col border-t-1 border-color p-4">
          <p className="text-xl font-semibold ">Theme Option</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={(e) =>
                setCurrentMode(e.target.value === 'Light' ? 'Light' : 'Dark')
              }
              checked={currentMode === 'Light'}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="light" className="text-md ml-2 cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={(e) =>
                setCurrentMode(e.target.value === 'Light' ? 'Light' : 'Dark')
              }
              className="cursor-pointer"
              checked={currentMode === 'Dark'}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="dark" className="text-md ml-2 cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="ml-4 border-t-1 border-color p-4">
          <p className="text-xl font-semibold ">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="relative mt-2 flex cursor-pointer items-center gap-5"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 cursor-pointer rounded-full"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setCurrentColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ThemeSettings;
