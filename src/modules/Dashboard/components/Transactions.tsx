'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { Button, LineChart } from '@/common/components/elements';
import { Card } from '@/common/components/ui/card';
import { RecentTodos } from '@/common/dummy/dummy';
import useStore from '@/common/hooks/useStore';

import DropDown from './DropDown';

const Transactions: React.FC = () => {
  const { currentColor } = useStore();
  const { theme } = useTheme();

  return (
    <div className="m-4 flex flex-wrap justify-center gap-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 1.3,
            type: 'spring',
            stiffness: 200,
          },
        }}
      >
        <Card className="rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xl font-semibold">代办事项</p>
            <DropDown theme={theme!} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {RecentTodos.map((item) => (
              <div key={item.title} className="mt-4 flex justify-between">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="rounded-lg p-4 text-2xl hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="新增代办"
                borderRadius="10px"
              />
            </div>
            <p className="text-sm text-gray-400">36 笔近期代办</p>
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
            delay: 1.5,
            type: 'spring',
            stiffness: 200,
          },
        }}
      >
        <Card className="w-96 rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-760">
          <div className="mb-10 flex items-center justify-between gap-2">
            <p className="text-xl font-semibold">成绩变化图</p>
            <DropDown theme={theme!} />
          </div>
          <div className="overflow-auto md:w-full">
            <LineChart />
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Transactions;
