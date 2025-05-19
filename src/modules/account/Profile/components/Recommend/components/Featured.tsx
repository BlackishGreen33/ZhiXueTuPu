import * as React from 'react';
import { PiGithubLogoLight } from 'react-icons/pi';
import { SiCss3, SiFramer } from 'react-icons/si';

const Featured: React.FC = React.memo(() => {
  return (
    <>
      <h1 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
        特点
      </h1>
      <div className="mt-6 flex items-center gap-x-3 rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
          <PiGithubLogoLight className="text-lg" />
        </div>
        <h3 className="text-xs">系统在 GitHub 开源免费</h3>
      </div>
      <div className="mt-6 flex items-center gap-x-3 rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
          <SiFramer className="text-lg" />
        </div>
        <h3 className="text-xs">
          使用 Framer Motion 实现
          <br />
          丝滑动画效果
        </h3>
      </div>
      <div className="mt-6 flex items-center gap-x-3 rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
          <SiCss3 className="text-lg" />
        </div>
        <h3 className="text-xs">
          利用 Tailwind CSS 实现
          <br />
          现代响应式设计
        </h3>
      </div>
    </>
  );
});

export default Featured;
