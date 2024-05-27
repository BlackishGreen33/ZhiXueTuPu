import React from 'react';

import { getAuthSession } from '@/common/utils/nextauth';
import { redirect } from 'next/navigation';

import QuizCreation from './QuizCreation';

type CreationProps = {
  searchParams?: {
    topic?: string;
  };
};

const Creation: React.FC<CreationProps> = React.memo(
  async ({ searchParams }) => {
    const session = await getAuthSession();
    if (!session?.user) {
      redirect('/quiz');
    }

    return (
      <main className="m-2 mt-24 h-auto p-2 md:m-10 md:p-10 flex justify-center items-center">
        <QuizCreation 
        // topic={searchParams.topic ?? ''}
        />
      </main>
    );
  }
);

export default Creation;
