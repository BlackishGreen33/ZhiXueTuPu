import * as React from 'react';

interface ChartsHeaderProps {
  category: string;
  title: string;
}

const PureChartsHeader: React.FC<ChartsHeaderProps> = ({ category, title }) => (
  <div className="mb-10">
    <div>
      <p className="text-lg text-gray-400">Chart</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200">
        {category}
      </p>
    </div>
    <p className="mb-2 mt-3 text-center text-xl dark:text-gray-200">{title}</p>
  </div>
);

const ChartsHeader = React.memo(PureChartsHeader);

export default ChartsHeader;
