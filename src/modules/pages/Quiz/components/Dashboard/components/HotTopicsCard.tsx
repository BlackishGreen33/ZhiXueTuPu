import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";
// import WordCloud from "../WordCloud";
import { prisma } from "@/common/utils/db";

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
        <CardDescription>
          点选一个主题即可开始测验。
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        WordCloud
        {/* <WordCloud formattedTopics={formattedTopics} /> */}
      </CardContent>
    </Card>
  );
});

export default HotTopicsCard;
