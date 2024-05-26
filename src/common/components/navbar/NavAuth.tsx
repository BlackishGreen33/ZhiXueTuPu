import { useSession } from 'next-auth/react';
import React from 'react';

import SignInButton from './SignInButton';
import UserAccountNav from './UserAccountNav';

const NavAuth: React.FC = React.memo(() => {
  const session = useSession();
  console.log(session);

  return (
    <>{session?.user ? <UserAccountNav /> : <SignInButton text={'登录'} />}</>
  );
});

export default NavAuth;
