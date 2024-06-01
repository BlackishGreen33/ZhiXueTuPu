import Image from 'next/image';
import React from 'react';

import { Card } from '@/common/components/ui/card';

const Promotion: React.FC = React.memo(() => {
  return (
    <Card className="mt-3 w-full text-nowrap rounded-2xl border border-neutral-200 bg-white p-4 text-neutral-950 dark:border-neutral-800 dark:bg-[#1C1C1C] dark:text-neutral-50 md:w-fit">
      <Image
        width={1000}
        height={1000}
        className="h-32 w-56 rounded-lg object-cover"
        src="./assets/game.jpg"
        alt="note cover"
        loading="lazy"
      />
      <p className="my-3 text-sm">3D Games in Reactjs</p>
      <button className="h-7 w-full rounded-md bg-[#696969] p-1 text-xs text-neutral-50">
        Get Now @20% OFF
      </button>
    </Card>
  );
});

export default Promotion;
