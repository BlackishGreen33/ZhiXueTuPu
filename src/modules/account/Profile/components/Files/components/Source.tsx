import React from 'react';

interface SourceProps {
  title: string;
  date: string;
}

const Source: React.FC<SourceProps> = React.memo(({ date, title }) => {
  return (
    <div className="rounded-lg p-4 transition-all duration-200 ease-in hover:bg-neutral-200 dark:hover:bg-neutral-800">
      <div className="flex items-center gap-x-3">
        <div>
          <span className="text-sm">{date}</span>
          <h2 className="font-RubikMedium text-sm">{title}</h2>
        </div>
      </div>
    </div>
  );
});

export default Source;
