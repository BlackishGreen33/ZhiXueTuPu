import Link from 'next/link';
import React from 'react';

const Download: React.FC = React.memo(() => {
  return (
    <>
      <h2 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
        智学图谱
      </h2>
      <p className="font-RubikRegular my-3 text-xs text-neutral-600 dark:text-neutral-400">
        厌倦使用浏览器进行学习了吗？ <br />
        智学图谱推出了移动端 APP <br />
        快来下载试试吧！
      </p>
      <Link href="https://github.com/BlackishGreen33/ZhiXueTuPu/releases/tag/v1.0.0">
        <button className="font-RubikMedium h-7 w-full rounded-md bg-[#696969] p-1 text-xs text-neutral-50">
          点击前往下载
        </button>
      </Link>
    </>
  );
});

export default Download;
