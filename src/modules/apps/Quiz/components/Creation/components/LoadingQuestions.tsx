import Image from 'next/image';
import React from 'react';

import { Progress } from '@/common/components/ui/progress';

type Props = { finished: boolean };

const loadingTexts = [
  '生成问题中...',
  '释放好奇心的力量...',
  '深入问题海洋...',
  '利用宇宙的集体知识...',
  '点燃好奇和探索的火焰...',
];

const LoadingQuestions = ({ finished }: Props) => {
  const [progress, setProgress] = React.useState(10);
  const [loadingText, setLoadingText] = React.useState(loadingTexts[0]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (finished) return 100;
        if (prev === 100) {
          return 0;
        }
        if (Math.random() < 0.1) {
          return prev + 2;
        }
        return prev + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [finished]);

  return (
    <div className="flex flex-col items-center md:w-[60vw]">
      <Image
        src={'/assets/loading.gif'}
        width={400}
        height={400}
        alt="loading"
      />
      <Progress value={progress} className="mt-4 w-full" />
      <h1 className="mt-2 text-xl">{loadingText}</h1>
    </div>
  );
};

export default LoadingQuestions;
