import React from 'react';

import Info from './Info';
import Note from './Note';
import Recommend from './Recommend';

const Profile: React.FC = React.memo(() => {
  return (
    <div className="m-2 mt-24 flex h-auto flex-col gap-4 rounded-xl p-2 md:m-10 md:flex-row md:p-10">
      <Info />
      <Note />
      <Recommend />
    </div>
  );
});

export default Profile;
