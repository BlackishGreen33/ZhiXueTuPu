'use client';

import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
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
    <Card className="px-3 py-4">
      <div className="control-pane h-[70vh] w-[300px] overflow-y-scroll bg-white scrollbar-hide">
        <div className="control-section">
          <div className="control_wrapper">
            <TreeViewComponent
              id="treeview"
              // @ts-ignore
              fields={fields}
              sortOrder="Ascending"
            />
          </div>
        </div>
      </div>
    </Card>
  );
});

export default TreeView;
