'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { FaInbox } from 'react-icons/fa6';
import { SiMicrosoftonenote } from 'react-icons/si';

import Border from '@/common/components/elements/Border';
import { NoteItems, SourceItems } from '@/common/dummy';

import { Card } from '@/common/components/ui/card';
import Banner from './Banner';
import More from './More';
import NoteItem from './NoteItem';
import Source from './Source';

const Files: React.FC = React.memo(() => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: 'spring',
          stiffness: 200,
        },
      }}
      className="w-full text-nowrap lg:w-fit"
    >
      <div className="rounded-2xl">
        <Banner
          icon={
            <SiMicrosoftonenote className="text-6xl text-neutral-950 dark:text-neutral-50" />
          }
          title="学习笔记"
          subtitle="随想随记"
          text1="时时记录自己的学习点滴"
          text2="为日后的课程打下扎实的基础"
        />
        <Border className="my-5" />
        <Card className="flex flex-col gap-2 overflow-hidden rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 dark:border-neutral-800 dark:bg-[#1C1C1C] dark:text-neutral-400">
          {NoteItems.map((note, index) => (
            <NoteItem key={index} {...note} />
          ))}
          <More />
        </Card>
        <Banner
          className="mt-6"
          icon={
            <FaInbox className="text-6xl text-neutral-950 dark:text-neutral-50" />
          }
          title="收藏资源"
          subtitle="学习锦囊"
          text1="将重要的学习资料收藏起来"
          text2="日后记得随时翻阅学习"
        />
        <Border className="my-5" />
        <Card className="mt-6 flex flex-col gap-2 overflow-hidden rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 dark:border-neutral-800 dark:bg-[#1C1C1C] dark:text-neutral-400">
          {SourceItems.map((source, index) => (
            <Source key={index} {...source} />
          ))}
          <More />
        </Card>
      </div>
    </motion.div>
  );
});

export default Files;
