import React from 'react';

import Enter from './Enter';
import Periodically from './Periodically';
import Revenue from './Revenue';
import Transactions from './Transactions';

const Dashboard: React.FC = React.memo(() => {
  return (
    <div className="mt-24">
      <Enter />
      <Revenue />
      <Transactions />
      <Periodically />
    </div>
  );
});

export default Dashboard;
