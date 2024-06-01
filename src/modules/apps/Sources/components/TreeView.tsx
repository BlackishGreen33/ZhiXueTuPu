'use client';

import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { motion } from 'framer-motion';
import React from 'react';

import { Card } from '@/common/components/ui/card';
import { SourceData } from '@/common/dummy/SourceData';

const TreeView: React.FC = React.memo(() => {
  const fields = {
    dataSource: SourceData,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild',
    iconCss: 'icon',
    imageUrl: 'image',
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, type: 'spring', stiffness: 200 },
      }}
    >
      <Card className="bg-white px-3 py-4">
        <div className="control-pane h-[70vh] w-[300px] overflow-y-scroll scrollbar-hide">
          <div className="control-section">
            <div className="control_wrapper">
              <TreeViewComponent
                id="treeview"
                // @ts-ignore
                fields={fields}
                sortOrder="Ascending"
                className="text-neutral-700 dark:text-neutral-300"
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
});

export default TreeView;
