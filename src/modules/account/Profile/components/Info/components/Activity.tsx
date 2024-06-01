import React from 'react';
import { PiGoogleLogoThin } from 'react-icons/pi';
import { SiAdobe } from 'react-icons/si';

const Activity: React.FC = React.memo(() => {
  return (
    <div className="my-4">
      <h1 className="my-4 text-sm font-bold">学习活动</h1>
      <div className="mt-7 flex  justify-between">
        <div className="flex gap-x-3">
          <PiGoogleLogoThin className="text-xl" />
          <div className="-mt-1">
            <h3 className="font-RubikMedium text-sm">Sr. Developer</h3>
            <p className="text-[9px]">Google</p>
          </div>
        </div>
        <small className="text-[9px]">January 2020 - Current</small>
      </div>
      <div className="my-3 flex  justify-between">
        <div className="flex gap-x-3">
          <SiAdobe className="text-xl" />
          <div className="-mt-1">
            <h3 className="font-RubikMedium text-sm">Jr. Creative Dev</h3>
            <p className="text-[9px]">Adobe</p>
          </div>
        </div>
        <small className="text-[9px]">Sep 2016 - January 2020</small>
      </div>
    </div>
  );
});

export default Activity;
