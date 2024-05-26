import React from 'react';

import WordCloud from '@/common/components/elements/Charts/WordCloud';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
// import { prisma } from "@/common/utils/db";

const mockData = [
  { text: 'JavaScript', value: 100 },
  { text: 'TypeScript', value: 80 },
  { text: 'React', value: 60 },
  { text: 'Node.js', value: 50 },
  { text: 'Angular', value: 40 },
  { text: 'Vue.js', value: 30 },
  { text: 'Svelte', value: 20 },
  { text: 'HTML', value: 10 },
  { text: 'CSS', value: 8 },
  { text: 'Sass', value: 6 },
  { text: 'Less', value: 4 },
  { text: 'PostCSS', value: 2 },
  { text: 'Webpack', value: 1 },
];

const HotTopicsCard: React.FC = React.memo(async () => {
  // const topics = await prisma.topic_count.findMany({});
  // const formattedTopics = topics.map((topic) => {
  //   return {
  //     text: topic.topic,
  //     value: topic.count,
  //   };
  // });

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">热门主题</CardTitle>
        <CardDescription>点选一个主题即可开始测验。</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        {/* <WordCloud formattedTopics={formattedTopics} /> */}
        <WordCloud formattedTopics={mockData} />
      </CardContent>
    </Card>
  );
});

export default HotTopicsCard;
