'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { FaInbox } from 'react-icons/fa6';
import { SiMicrosoftonenote } from 'react-icons/si';

const Note: React.FC = React.memo(() => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: 'spring',
          stiffness: 200,
        },
      }}
      className="w-full lg:w-fit"
    >
      <div className="rounded-2xl">
        <div className="flex gap-x-6 rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-[#1C1C1C]">
          <SiMicrosoftonenote className="text-6xl text-neutral-950 dark:text-neutral-50" />
          <div>
            <h1 className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              学习笔记,{' '}
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                随想随记
              </span>
            </h1>
            <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
              时时记录自己的学习点滴 <br /> 为日后的课程打下扎实的基础
            </p>
          </div>
        </div>
        <div className="my-5 border border-neutral-700" />
        <div className="flex flex-col gap-2 overflow-hidden rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 dark:border-neutral-800 dark:bg-[#1C1C1C] dark:text-neutral-400">
          <Link href={'/dashboard/djdj'}>
            <div className="rounded-lg p-4 transition-all duration-200 ease-in hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <div className="flex items-center gap-x-3">
                <Image
                  width={1000}
                  height={1000}
                  className="h-24 w-24 rounded-md object-cover"
                  src="./assets/pic.jpg"
                  alt=""
                />
                <div>
                  <span className="text-sm">June 01, 2024</span>
                  <h2 className="font-RubikMedium text-sm">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          <div className="rounded-lg p-4 transition-all duration-200 ease-in hover:bg-neutral-200 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-3">
              <Image
                height={1000}
                width={1000}
                className="h-24 w-24 rounded-md object-cover"
                src="./assets/game.jpg"
                alt=""
              />
              <div>
                <span className="text-sm">June 01, 2024</span>
                <h2 className="font-RubikMedium text-sm">
                  Smooth Animation with React and Framer Motion
                </h2>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4 transition-all duration-200 ease-in hover:bg-neutral-200 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-3">
              <Image
                height={1000}
                width={1000}
                className="h-24 w-24 rounded-md object-cover"
                src="./assets/scult.jpeg"
                alt=""
              />
              <div>
                <span className="text-sm">June 01, 2024</span>
                <h2 className="font-RubikMedium text-sm">
                  Smooth Animation with React and Framer Motion
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-3 px-4 py-2">
            <div className="flex items-center gap-x-2 text-sm">
              <p>查看更多</p>
              <FaPaperPlane />
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-x-6 rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-[#1C1C1C]">
          <FaInbox className="text-6xl text-neutral-950 dark:text-neutral-50" />
          <div>
            <h1 className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              收藏资源,{' '}
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                学习锦囊
              </span>
            </h1>
            <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
              将重要的学习资料收藏起来
              <br />
              日后记得随时翻阅学习
            </p>
          </div>
        </div>
        <div className="my-5 border border-neutral-700" />
        <div className="mt-6 flex flex-col gap-2 overflow-hidden rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 dark:border-neutral-800 dark:bg-[#1C1C1C] dark:text-neutral-400">
          <div className="rounded-lg p-4 transition-all duration-200 ease-in hover:bg-neutral-200 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-3">
              <div>
                <span className="text-sm">June 01, 2024</span>
                <h2 className="font-RubikMedium text-sm">
                  Smooth Animation with React and Framer Motion
                </h2>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4 transition-all duration-200 ease-in hover:bg-neutral-200 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-3">
              <div>
                <span className="text-sm">June 01, 2024</span>
                <h2 className="font-RubikMedium text-sm">
                  Smooth Animation with React and Framer Motion
                </h2>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4 transition-all duration-200 ease-in hover:bg-neutral-200 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-3">
              <div>
                <span className="text-sm">June 01, 2024</span>
                <h2 className="font-RubikMedium text-sm">
                  Smooth Animation with React and Framer Motion
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-3 px-4 py-2">
            <div className="flex items-center gap-x-2 text-sm">
              <p>查看更多</p>
              <FaPaperPlane />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default Note;
