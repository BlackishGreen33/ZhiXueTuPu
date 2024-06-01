'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { PiGithubLogoLight } from 'react-icons/pi';
import { SiCss3, SiFramer } from 'react-icons/si';

import Tooltips from './Tooltips';

const Recommend: React.FC = React.memo(() => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: 'spring',
          stiffness: 200,
        },
      }}
      className="w-full md:w-fit"
    >
      <div className="sticky top-5 h-fit w-full rounded-2xl md:w-6">
        <div>
          <div className="h-fit min-w-min text-nowrap rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-[#1C1C1C]">
            <h2 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
              90+ Framer Shadows
            </h2>
            <p className="font-RubikRegular my-3 text-xs text-neutral-600 dark:text-neutral-400">
              Stop worrying about perfecting <br />
              the shadows, just Copy & Paste <br />
              from the 80+ Shadows collection
            </p>
            <button className="font-RubikMedium h-7 w-full rounded-md bg-[#696969] p-1 text-xs text-neutral-50">
              Download
            </button>
            <div className="my-5 border border-neutral-700" />
            <div className="text-neutral-600 dark:text-neutral-400">
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

              <div className="my-5 border border-neutral-700" />

              <div className="flex items-center justify-center gap-x-2">
                <Tooltips />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 w-full text-nowrap rounded-2xl border border-neutral-200 bg-white p-4 text-neutral-950 dark:border-neutral-800 dark:bg-[#1C1C1C] dark:text-neutral-50 md:w-fit">
          <Image
            width={1000}
            height={1000}
            className="h-32 w-56 rounded-lg object-cover"
            src="./assets/game.jpg"
            alt="note cover"
            loading="lazy"
          />
          <p className="my-3 text-sm">3D Games in Reactjs</p>
          <button className="h-7 w-full rounded-md bg-[#696969] p-1 text-xs text-neutral-50">
            Get Now @20% OFF
          </button>
        </div>
      </div>
    </motion.div>
  );
});

export default Recommend;
