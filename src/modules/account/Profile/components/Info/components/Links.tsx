import Link from 'next/link';
import React from 'react';
import { PiBookOpenTextLight, PiHouseLight } from 'react-icons/pi';

const Links: React.FC = React.memo(() => {
  return (
    <div className="flex h-fit w-full justify-end gap-x-1">
      <Link href="/">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-700/50">
          <PiHouseLight className="text-neutral-100" />
        </div>
      </Link>
      <Link href="/sources">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-700/50">
          <PiBookOpenTextLight className="text-neutral-100" />
        </div>
      </Link>
    </div>
  );
});

export default Links;
