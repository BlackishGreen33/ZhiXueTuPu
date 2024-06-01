import React from 'react';

const Download: React.FC = React.memo(() => {
  return (
    <>
      <h2 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
        90+ Framer Shadows
      </h2>
      <p className="font-RubikRegular my-3 text-xs text-neutral-600 dark:text-neutral-400">
        Stop worrying about perfecting <br />
        the shadows, just Copy & Paste <br />
        from the 80+ Shadows collection
      </p>
      <button className="font-RubikMedium h-7 w-full rounded-md bg-[#696969] p-1 text-xs text-neutral-50">
        Download
      </button>
    </>
  );
});

export default Download;
