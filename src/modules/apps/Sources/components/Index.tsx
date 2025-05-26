'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

import RelationChart from '@/common/components/elements/Charts/RelationChart';
import { Card } from '@/common/components/ui/card';
import useStore from '@/common/hooks/useStore';

import Viewer from './Viewer';

const Index: React.FC = () => {
  const { isViewer } = useStore();
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.3,
          type: 'spring',
          stiffness: 200,
        },
      }}
      className="h-auto w-full"
    >
      <Card className="w-full overflow-hidden bg-white">
        {isViewer ? <Viewer /> : <RelationChart />}
      </Card>
    </motion.div>
  );
};

export default Index;
