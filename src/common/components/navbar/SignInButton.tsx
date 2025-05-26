'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import useStore from '@/common/hooks/useStore';

import { Button } from '../ui/button';

type SignInButtonProps = { text: string };

const PureSignInButton: React.FC<SignInButtonProps> = ({ text }) => {
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
};

const SignInButton = React.memo(PureSignInButton);

export default SignInButton;
