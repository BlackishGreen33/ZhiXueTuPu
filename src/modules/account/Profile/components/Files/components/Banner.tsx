import { Card } from '@/common/components/ui/card';
import React from 'react';

interface BannerProps {
  className?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  text1: string;
  text2: string;
}

const Banner: React.FC<BannerProps> = React.memo(
  ({ className, icon, title, subtitle, text1, text2 }) => {
    return (
      <Card
        className={`flex gap-x-6 rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-[#1C1C1C] ${className}`}
      >
        {icon}
        <div>
          <h1 className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {title},{' '}
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {subtitle}
            </span>
          </h1>
          <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
            {text1}
            <br />
            {text2}
          </p>
        </div>
      </Card>
    );
  }
);

export default Banner;
