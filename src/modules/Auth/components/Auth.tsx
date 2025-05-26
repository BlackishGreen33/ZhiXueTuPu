'use client';

// eslint-disable-next-line simple-import-sort/imports
import axios from 'axios';
import { motion } from 'framer-motion';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import { RiAdminFill } from 'react-icons/ri';

import { Card } from '@/common/components/ui/card';
import useStore from '@/common/hooks/useStore';

const Auth: React.FC = () => {
  const router = useRouter();
  const { setUserType, userType } = useStore();
  const { data: session } = useSession();

  const handleClick = async () => {
    if (session?.user) {
      const res = await axios.post('/api/userType', {
        userType: userType,
        id: session?.user.id,
      });
      if (res.status === 200) router.push('/');
    } else {
      signIn('github');
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, type: 'spring', stiffness: 200 },
      }}
      className="m-2 mt-24 flex h-[70vh] flex-col items-center justify-center gap-5 rounded-3xl p-2 md:m-10 md:flex-row md:p-10"
    >
      <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
        <Card
          className="flex w-48 cursor-pointer flex-col items-center gap-2 px-5 py-3"
          onClick={() => {
            setUserType('admin');
            handleClick();
          }}
        >
          <RiAdminFill className="text-3xl" />
          <h2 className="font-bold">管理员</h2>
          <p className="text-center">以管理员身份登录，可查看所有信息</p>
        </Card>
      </motion.div>
      <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
        <Card
          className="flex w-48 cursor-pointer flex-col items-center gap-2 px-5 py-3"
          onClick={() => {
            setUserType('student');
            handleClick();
          }}
        >
          <PiStudentBold className="text-3xl" />
          <h2 className="font-bold">学生</h2>
          <p className="text-center">以学生身份登录，探索学习</p>
        </Card>
      </motion.div>
      <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
        <Card
          className="flex w-48 cursor-pointer flex-col items-center gap-2 px-5 py-3"
          onClick={() => {
            setUserType('teacher');
            handleClick();
          }}
        >
          <FaChalkboardTeacher className="text-3xl" />
          <h2 className="font-bold">教师</h2>
          <p className="text-center">以教师身份登录，发布课程</p>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Auth;
