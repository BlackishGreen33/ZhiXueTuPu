'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

import Border from '@/common/components/elements/Border';
import { Card } from '@/common/components/ui/card';

import Activity from './Activity';
import Basic from './Basic';
import Follow from './Follow';
import Introduction from './Introduction';
import Links from './Links';

const Info: React.FC = React.memo(() => {
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
        <Card className="h-full w-full rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-[#1C1C1C] md:w-80">
          <div className="flex">
            <Basic />
            <Links />
          </div>
          <Follow />
          <div className="w-full text-neutral-700 dark:text-neutral-300">
            <Introduction />
            <Border className="my-6" />
            <Activity />
          </div>
        </Card>
      </motion.div>
    </div>
  );
});

export default Info;
