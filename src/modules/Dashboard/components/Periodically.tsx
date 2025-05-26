'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { IoIosMore } from 'react-icons/io';

import { Button } from '@/common/components/elements';
import Radar from '@/common/components/elements/Charts/Radar';
import { Card } from '@/common/components/ui/card';
import { medicalproBranding } from '@/common/dummy/dummy';
import useStore from '@/common/hooks/useStore';

const Periodically: React.FC = () => {
  const router = useRouter();
  const { currentColor, isVisible, setIsVisible } = useStore();
  const product9 = './assets/product9.png';

  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 1.7,
            type: 'spring',
            stiffness: 200,
          },
        }}
      >
        <Card className="m-3 rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-400">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">成绩变化雷达图</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <div className="mt-4" ref={componentRef}>
              {isVisible && <Radar />}
            </div>
          </div>
        </Card>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 1.9,
            type: 'spring',
            stiffness: 200,
          },
        }}
      >
        <Card className="m-3 w-400 rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">课程讲座</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              <IoIosMore />
            </button>
          </div>
          <p className="mt-10 w-32 cursor-pointer text-nowrap rounded-lg bg-orange-400 px-2 py-0.5 text-xs font-semibold text-gray-200 hover:drop-shadow-xl">
            2024 年 6 月 10 日
          </p>

          <div className="mt-6 flex gap-4 border-b-1 border-color">
            {medicalproBranding.data.map((item) => (
              <div
                key={item.title}
                className="border-r-1 border-color pb-2 pr-4"
              >
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 border-b-1 border-color pb-4">
            <p className="text-md mb-2 font-semibold">主题</p>
            <p className="mb-2 text-sm">非关系型数据库的设计与实现</p>
            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer rounded-lg px-3 py-0.5 text-xs text-white hover:drop-shadow-xl"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md mb-2 font-semibold">讲师</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <Image
                  key={index}
                  className="h-8 w-8 rounded-full"
                  src={item.image}
                  alt=""
                  loading="lazy"
                  width={200}
                  height={200}
                />
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="报名参加"
                borderRadius="10px"
              />
            </div>
            <p className="text-sm text-gray-400">5 场关联活动</p>
          </div>
        </Card>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 2.1,
            type: 'spring',
            stiffness: 200,
          },
        }}
      >
        <Card className="m-3 w-400 rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">每日知识点</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <Image
              className="h-50 md:w-96"
              src={product9}
              alt=""
              loading="lazy"
              width={200}
              height={200}
            />
            <div className="mt-8">
              <p className="text-lg font-semibold">
                死锁面试题（什么是死锁，产生死锁的原因及必要条件）
              </p>
              <p className="text-gray-400">作者：AddoilDan</p>
              <p className="mt-8 text-sm text-gray-400">
                所谓死锁，是指多个进程在运行过程中因争夺资源而造成的一种僵局，当进程处于这种僵持状态时，若无外力作用，它们都将无法再向前推进。
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="阅读更多"
                  borderRadius="10px"
                  onClick={() =>
                    router.push(
                      'https://blog.csdn.net/hd12370/article/details/82814348'
                    )
                  }
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Periodically;
