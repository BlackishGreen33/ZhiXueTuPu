import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface NoteItemProps {
  link: string;
  cover: string;
  date: string;
  title: string;
}

const NoteItem: React.FC<NoteItemProps> = React.memo(
  ({ link, cover, date, title }) => {
    return (
      <Link href={link}>
        <div className="rounded-lg p-4 transition-all duration-200 ease-in hover:bg-neutral-200 dark:hover:bg-neutral-800">
          <div className="flex items-center gap-x-3">
            <Image
              width={1000}
              height={1000}
              className="h-24 w-24 rounded-md object-cover"
              src={cover}
              alt={title}
              loading="lazy"
            />
            <div>
              <span className="text-sm">{date}</span>
              <h2 className="font-RubikMedium text-sm">{title}</h2>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

export default NoteItem;
