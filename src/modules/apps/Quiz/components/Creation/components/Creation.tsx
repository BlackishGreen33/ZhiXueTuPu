import { redirect } from 'next/navigation';
import * as React from 'react';

import { getAuthSession } from '@/common/utils/nextauth';

import QuizCreation from './QuizCreation';

type CreationProps = {
  searchParams: {
    topic?: string;
  };
};

const Creation: React.FC<CreationProps> = async ({ searchParams }) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect('/quiz');
  }

  return (
    <main className="m-2 mt-24 flex h-auto items-center justify-center p-2 md:m-10 md:p-10">
      <QuizCreation topic={searchParams.topic ?? ''} />
    </main>
  );
};

export default Creation;
