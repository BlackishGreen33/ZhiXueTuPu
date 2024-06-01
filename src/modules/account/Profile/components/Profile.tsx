import React from 'react';

import Files from './Files';
import Info from './Info';
import Note from './Note';
import Recommend from './Recommend';

interface ProfileProps {
  noteId?: string;
}

const Profile: React.FC<ProfileProps> = React.memo(({ noteId }) => {
  return (
    <div className="m-2 mt-24 flex h-auto flex-col gap-4 rounded-xl p-2 md:m-10 md:flex-row md:p-10">
      <Info />
      {noteId ? <Note noteId={noteId} /> : <Files />}
      <Recommend />
    </div>
  );
});

export default Profile;
