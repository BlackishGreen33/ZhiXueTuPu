'use client';

import React from 'react';

import useStore from '@/common/hooks/useStore';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

type SignInButtonProps = { text: string };

const SignInButton: React.FC<SignInButtonProps> = React.memo(({ text }) => {
  const { currentColor } = useStore();
  const router = useRouter();

  return (
    <Button
      style={{ backgroundColor: currentColor }}
      onClick={() => {
        router.push('/auth');
      }}
    >
      {text}
    </Button>
  );
});

export default SignInButton;
