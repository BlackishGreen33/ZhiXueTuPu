import React from 'react';

import Index from './Index';
import TreeView from './TreeView';

const Quiz: React.FC = React.memo(async () => {
  return (
    <div className="m-2 mt-24 flex h-auto flex-col gap-3 md:m-10 md:p-10">
      <div className="flex gap-2">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">资源管理</h2>
      </div>
      <div className="flex gap-3">
        <TreeView />
        <Index />
      </div>
    </div>
  );
});

export default Quiz;
