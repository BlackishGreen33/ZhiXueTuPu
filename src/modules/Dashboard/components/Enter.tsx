'use client';

import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

import { Button } from '@/common/components/elements';
import { Card } from '@/common/components/ui/card';
import { EnterData } from '@/common/dummy/dummy';
import useStore from '@/common/hooks/useStore';

const Enter: React.FC = () => {
  const { currentColor } = useStore();

  return (
    <div className="flex flex-wrap justify-center lg:flex-nowrap">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: 'spring', stiffness: 200 },
        }}
      >
        <Card className="m-3 h-44 w-full rounded-xl bg-white bg-hero-pattern bg-cover bg-center bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-400">平台在线用户</p>
              <p className="text-2xl">1919810 人</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="opacity-0.9 rounded-full p-4 text-2xl text-white  hover:drop-shadow-xl"
            >
              <FaDownload />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="下载移动端 APP"
              borderRadius="10px"
            />
          </div>
        </Card>
      </motion.div>
      <div className="m-3 flex flex-wrap items-center justify-center gap-1">
        {EnterData.map((item, index) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                type: 'spring',
                delay: 0.1 * index,
                stiffness: 200,
              },
            }}
          >
            <Card
              key={item.title}
              className="h-44 rounded-2xl bg-white p-4 pt-9  dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56 "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="opacity-0.9 rounded-full p-4  text-2xl hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="mt-1 text-sm  text-gray-400">{item.title}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Enter;
