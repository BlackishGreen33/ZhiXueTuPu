import React from 'react';
import { PiMagicWandThin, PiShapesThin } from 'react-icons/pi';

const Introduction: React.FC = React.memo(() => {
  return (
    <div className="my-4">
      <h2 className="my-4 text-sm font-bold">个人简介</h2>
      <p className="my-3 text-[12px]">
        The world of digital design and <br /> development is constantly
        evolving and so <br /> has my role over the last 7 years.
      </p>
      <div className="mt-6 flex justify-between text-sm">
        <div className="flex items-center gap-x-1">
          <PiShapesThin />
          <span className="font-RubikRegular text-xs">
            7 Years as a Developer
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <PiMagicWandThin />
          <span className="font-RubikRegular text-xs">24 Projects</span>
        </div>
      </div>
    </div>
  );
});

export default Introduction;
