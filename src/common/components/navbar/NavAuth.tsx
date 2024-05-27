import { useSession } from 'next-auth/react';
import React from 'react';

import SignInButton from './SignInButton';
import UserAccountNav from './UserAccountNav';

const NavAuth: React.FC = React.memo(() => {
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <UserAccountNav user={session?.user} />
      ) : (
        <SignInButton text={'登录'} />
      )}
    </>
  );
});

export default NavAuth;
