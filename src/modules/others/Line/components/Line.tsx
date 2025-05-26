import * as React from 'react';

import { ChartsHeader, LineChart } from '@/common/components/elements';

const Line: React.FC = () => (
  <div className="m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
);

export default Line;
