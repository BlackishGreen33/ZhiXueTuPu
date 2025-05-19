import * as React from 'react';
import { FaPencil } from 'react-icons/fa6';

const Activity: React.FC = React.memo(() => {
  return (
    <div className="my-4">
      <h1 className="my-4 text-sm font-bold">学习活动</h1>
      <div className="mt-7 flex justify-between">
        <div className="flex gap-x-3">
          <FaPencil className="text-xl" />
          <div className="-mt-1">
            <h3 className="font-RubikMedium text-sm">计算机组成原理</h3>
            <p className="text-[9px]">测验</p>
          </div>
        </div>
        <small className="text-[9px]">上午 10 点</small>
      </div>
      <div className="my-3 flex justify-between">
        <div className="flex gap-x-3">
          <FaPencil className="text-xl" />
          <div className="-mt-1">
            <h3 className="font-RubikMedium text-sm">数据库原理</h3>
            <p className="text-[9px]">测验</p>
          </div>
        </div>
        <small className="text-[9px]">昨日</small>
      </div>
    </div>
  );
});

export default Activity;
