'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { userProfileData } from '@/common/dummy/dummy';

import Link from 'next/link';
import { Button } from '.';

const UserProfile: React.FC = React.memo(() => {
  const { data: session } = useSession();

  return (
    <div className="nav-item absolute right-1 top-16 w-96 rounded-lg bg-white p-8 dark:bg-[#42464D]">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold dark:text-gray-200">个人信息</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-6 flex items-center gap-5 border-b-1 border-color pb-6">
        <Image
          className="h-24 w-24 rounded-full"
          // @ts-ignore
          src={session?.user.image as String}
          alt="user-profile"
          loading="lazy"
          width={200}
          height={200}
        />
        <div>
          <p className="text-xl font-semibold dark:text-gray-200">
            {' '}
            {session?.user.name}{' '}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400"> 管理员 </p>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            {' '}
            {session?.user.email}{' '}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <Link href={item.herf}>
            <div
              key={index}
              className="flex cursor-pointer gap-5 border-b-1 border-color p-4 hover:bg-light-gray  dark:hover:bg-[#42464D]"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" rounded-lg p-3 text-xl hover:bg-light-gray"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {' '}
                  {item.desc}{' '}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={'#FF0000'}
          text="登出"
          borderRadius="10px"
          width="full"
          onClick={() => signOut()}
        />
      </div>
    </div>
  );
});

export default UserProfile;
