'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Card } from '@/common/components/ui/card';
import Viewer from './Viewer';

type IndexProps = {};

const Index: React.FC<IndexProps> = React.memo(() => {
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
        <Viewer />
      </Card>
    </motion.div>
  );
});

export default Index;
