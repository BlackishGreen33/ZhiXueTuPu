'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

import useStore from '@/common/hooks/useStore';

import { Button } from '../ui/button';

type SignInButtonProps = { text: string };

const SignInButton: React.FC<SignInButtonProps> = React.memo(({ text }) => {
  const { currentColor } = useStore();
  return (
    <Button
      style={{ backgroundColor: currentColor }}
      onClick={() => {
        signIn('google').catch(console.error);
      }}
    >
      {text}
    </Button>
  );
});

export default SignInButton;
