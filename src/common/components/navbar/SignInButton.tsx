'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import useStore from '@/common/hooks/useStore';

import { Button } from '../ui/button';

type SignInButtonProps = { text: string };

const SignInButton: React.FC<SignInButtonProps> = React.memo(({ text }) => {
  const router = useRouter();
  const { currentColor } = useStore();

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
