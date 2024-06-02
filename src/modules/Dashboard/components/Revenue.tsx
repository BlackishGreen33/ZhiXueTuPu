'use client';

import { useEffect, useRef } from 'react';
import { GoDotFill } from 'react-icons/go';

import { Button, Pie, SparkLine, Stacked } from '@/common/components/elements';
import { Card } from '@/common/components/ui/card';
import { PieChartData } from '@/common/dummy';
import { SparklineAreaData } from '@/common/dummy/dummy';
import useStore from '@/common/hooks/useStore';
import { motion } from 'framer-motion';

const Revenue: React.FC = () => {
  const { currentColor, isVisible, setIsVisible } = useStore();

  const componentRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (componentRef2.current) {
      observer2.observe(componentRef2.current);
    }
    return () => {
      observer2.disconnect();
    };
  }, [isVisible]);

  return (
    <section className="flex flex-wrap justify-center gap-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 0.7,
            type: 'spring',
            stiffness: 200,
          },
        }}
      >
        <Card className="m-3 rounded-2xl bg-white p-4 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780  ">
          <div className="flex justify-between">
            <p className="ml-5 mt-3 text-2xl font-semibold">学习频率分析图</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>学习时长</span>
              </p>
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>闲置时长</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            <div className=" m-4 border-r-1 border-color pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">25,565 秒</span>
                  <span className="ml-3 cursor-pointer rounded-full bg-green-400 p-1.5 text-xs text-white hover:drop-shadow-xl">
                    52.7%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">学习平均时长</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">48,487 秒</p>

                <p className="mt-1 text-gray-500">在线平均时长</p>
              </div>
              <div className="mt-5" ref={componentRef2}>
                {!isVisible && (
                  <SparkLine
                    currentColor={currentColor}
                    id="line-sparkLine"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                )}
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="下载学习报表"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </Card>
      </motion.div>
      <div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: 0.9,
              type: 'spring',
              stiffness: 200,
            },
          }}
        >
          <Card
            className=" m-3 rounded-2xl p-4 md:w-400"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex items-center justify-between ">
              <p className="text-2xl font-semibold text-white">学习频率分布</p>

              <div>
                <p className="mt-8 text-2xl font-semibold text-white">
                  18,846 秒
                </p>
                <p className="text-gray-200">每月平均</p>
              </div>
            </div>
            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
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
              delay: 1.1,
              type: 'spring',
              stiffness: 200,
            },
          }}
        >
          <Card className="m-3 flex items-center justify-center gap-10 rounded-2xl bg-white p-8 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-400">
            <div>
              <p className="text-2xl font-semibold">时间分配</p>
              <p className="text-gray-400">各科学领域的学习时间分布</p>
            </div>
            <div className="w-40">
              <Pie
                id="pie-chart"
                data={PieChartData}
                legendVisiblity={false}
                height="160px"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Revenue;
