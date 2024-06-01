'use client';

import { motion, useAnimation } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  PiBookOpenTextLight,
  PiGoogleLogoThin,
  PiHouseLight,
  PiMagicWandThin,
  PiShapesThin,
} from 'react-icons/pi';
import { SiAdobe } from 'react-icons/si';

const Info: React.FC = React.memo(() => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const controls = useAnimation();
  const { data: session } = useSession();

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      setEmail('');
    } else {
      controls.start({
        x: 0,
        transition: {
          type: 'spring',
          velocity: '600',
          stiffness: '5000',
          damping: 15,
        },
      });
    }
  };

  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: 'spring', stiffness: 200 },
        }}
        className="sticky top-5 h-fit w-full rounded-lg bg-white dark:bg-[#1C1C1C]"
      >
        <div className="h-full w-full rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-[#1C1C1C] md:w-80">
          <div className="flex">
            <div className="relative w-full">
              <Image
                width={1000}
                height={1000}
                className="h-28 w-28 rounded-full object-cover"
                src={session?.user ? (session.user.image as string) : ''}
                alt=""
              />
              <div
                onClick={() => setOpen(!open)}
                className="absolute left-24 top-20 h-3 w-3 animate-pulse cursor-pointer rounded-full bg-lime-400"
              />
              {open && (
                <div className="absolute right-12 top-[4.7rem] flex h-5 w-fit items-center justify-center rounded-2xl border border-lime-400 px-2">
                  <p className="text-[9px] text-lime-300">正在线上</p>
                </div>
              )}
              <h1 className="mt-3 text-xl font-bold text-neutral-700 dark:text-neutral-300">
                {session?.user ? session.user.name : '尚未登录'}
              </h1>
              <p className="font-RubikMedium mt-2 text-xs text-neutral-700 dark:text-neutral-300">
                {session?.user ? session.user.email : '114514@email.com'} 📧
              </p>
              <p className="font-RubikMedium mt-1 text-xs text-neutral-700 dark:text-neutral-300">
                {session?.expires
                  ? (session.expires as string)
                  : '1970-01-01T00:00:00.000Z '}{' '}
                🌍
              </p>
              <div className="flex w-full   ">
                <div className="my-4 flex  gap-x-1 text-xs">
                  <p className="flex h-5 items-center justify-center rounded-md bg-gray-200 px-2 text-[11px] text-neutral-700 dark:bg-gray-800 dark:text-neutral-300">
                    ReactJS
                  </p>
                  <p className="flex h-5 items-center justify-center rounded-md bg-gray-200 px-2 text-[11px] text-neutral-700 dark:bg-gray-800 dark:text-neutral-300">
                    Git
                  </p>
                  <p className="flex h-5 items-center justify-center rounded-md bg-gray-200 px-2 text-[11px] text-neutral-700 dark:bg-gray-800 dark:text-neutral-300">
                    NodeJS
                  </p>
                  <p className="flex h-5 shrink-0 items-center justify-center rounded-md bg-gray-200 px-2 text-[11px] text-neutral-700 dark:bg-gray-800 dark:text-neutral-300 ">
                    Framer Motion
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-fit w-full justify-end gap-x-1">
              <Link href="/">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-700/50">
                  <PiHouseLight className="text-neutral-100" />
                </div>
              </Link>
              <Link href="/sources">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-700/50">
                  <PiBookOpenTextLight className="text-neutral-100" />
                </div>
              </Link>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex h-9 w-full items-center justify-between rounded-md bg-gray-200 p-1 dark:bg-gray-800"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="placeholder:font-RubikMedium h-full w-36 bg-transparent pl-2 text-xs text-neutral-400 placeholder:text-xs placeholder:text-neutral-600 focus:outline-none"
              placeholder="name@email.com"
              type="text"
            />
            <motion.button
              animate={controls}
              className="font-RubikMedium h-full w-20 rounded-md bg-[#696969] p-1 text-xs text-neutral-50"
            >
              Subscribe
            </motion.button>
          </form>

          <div className="mt-5 w-full text-neutral-700 dark:text-neutral-300">
            <h2 className="my-4 text-sm font-bold">个人简介</h2>
            <p className="font-RubikRegular  my-3 text-[12px]">
              The world of digital design and <br /> development is constantly
              evolving and so <br /> has my role over the last 7 years.
            </p>
            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin />
                <span className="font-RubikRegular text-xs">
                  7 Years as a Developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <PiMagicWandThin />
                <span className="font-RubikRegular text-xs">24 Projects</span>
              </div>
            </div>
            <div className="my-6 border border-[#282828] text-neutral-300" />
            <div className="my-4 ">
              <h1 className="my-4 text-sm font-bold">学习活动</h1>
              <div className="mt-7 flex  justify-between">
                <div className="flex gap-x-3">
                  <PiGoogleLogoThin className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="font-RubikMedium text-sm">Sr. Developer</h3>
                    <p className="text-[9px]">Google</p>
                  </div>
                </div>
                <small className="text-[9px]">January 2020 - Current</small>
              </div>
              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <SiAdobe className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="font-RubikMedium text-sm">
                      Jr. Creative Dev
                    </h3>
                    <p className="text-[9px]">Adobe</p>
                  </div>
                </div>
                <small className="text-[9px]">Sep 2016 - January 2020</small>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default Info;
