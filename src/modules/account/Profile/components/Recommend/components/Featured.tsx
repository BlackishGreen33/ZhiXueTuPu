import React from 'react';
import { PiGithubLogoLight } from 'react-icons/pi';
import { SiCss3, SiFramer } from 'react-icons/si';

const Featured: React.FC = React.memo(() => {
  return (
    <>
      <h1 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
        Featured in
      </h1>
      <div className="mt-6 flex items-center gap-x-3 rounded-md  p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
          <PiGithubLogoLight className="text-lg" />
        </div>
        <h3 className="text-xs">
          9 Essential Javascript <br /> Functions
        </h3>
      </div>
      <div className="mt-6 flex items-center gap-x-3 rounded-md  p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
          <SiFramer className="text-lg" />
        </div>
        <h3 className="text-xs">
          How to easily creat React <br /> animations: Framer Motion
        </h3>
      </div>
      <div className="mt-6 flex items-center gap-x-3 rounded-md  p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
          <SiCss3 className="text-lg" />
        </div>
        <h3 className="text-xs ">TailwindCSS tips</h3>
      </div>
    </>
  );
});

export default Featured;
