'use client';

import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from '@syncfusion/ej2-react-grids';
import * as React from 'react';

import Header from '@/common/components/elements/Header';
import { contextMenuItems, ordersData, ordersGrid } from '@/common/dummy/dummy';

const Orders: React.FC = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
