import Image from 'next/image';
import * as React from 'react';

import { Card } from '@/common/components/ui/card';

const Promotion: React.FC = React.memo(() => {
  return (
    <Card className="mt-3 w-full text-nowrap rounded-2xl border border-neutral-200 bg-white p-4 text-neutral-950 dark:border-neutral-800 dark:bg-[#1C1C1C] dark:text-neutral-50 md:w-fit">
      <Image
        width={1000}
        height={1000}
        className="h-32 w-56 rounded-lg object-cover"
        src="https://raw.githubusercontent.com/BlackishGreen33/ZhiXueTuPu/main/public/assets/game.jpg"
        alt="note cover"
        loading="lazy"
      />
      <p className="my-3 text-sm">加速你的编程技巧</p>
      <button className="h-7 w-full rounded-md bg-[#696969] p-1 text-xs text-neutral-50">
        查看更多
      </button>
    </Card>
  );
});

export default Promotion;
