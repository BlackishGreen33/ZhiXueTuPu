'use client';

import { motion } from 'framer-motion';

import Border from '@/common/components/elements/Border';
import { Card } from '@/common/components/ui/card';

import Download from './Download';
import Featured from './Featured';
import Promotion from './Promotion';
import Tooltips from './Tooltips';

const Recommend: React.FC = () => (
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
      <Card className="h-fit min-w-min text-nowrap rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-[#1C1C1C]">
        <Download />
        <Border className="my-5" />
        <div className="text-neutral-600 dark:text-neutral-400">
          <Featured />
          <Border className="my-5" />
          <div className="flex items-center justify-center gap-x-2">
            <Tooltips />
          </div>
        </div>
      </Card>
      <Promotion />
    </div>
  </motion.div>
);

export default Recommend;
