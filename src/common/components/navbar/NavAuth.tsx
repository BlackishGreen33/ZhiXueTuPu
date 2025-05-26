import { useSession } from 'next-auth/react';
import * as React from 'react';

import SignInButton from './SignInButton';
import UserAccountNav from './UserAccountNav';

const PureNavAuth: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <UserAccountNav user={session?.user} />
      ) : (
        <SignInButton text="登录" />
      )}
    </>
  );
};

const NavAuth = React.memo(PureNavAuth);

export default NavAuth;
