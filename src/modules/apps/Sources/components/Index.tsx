import React from 'react';

import { Card } from '@/common/components/ui/card';

type IndexProps = {};

const Index: React.FC<IndexProps> = React.memo(() => {
  return <Card className="w-full bg-white">Have a good coding</Card>;
});

export default Index;
