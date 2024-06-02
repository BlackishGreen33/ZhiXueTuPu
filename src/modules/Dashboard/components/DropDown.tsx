import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React from 'react';

import { DropdownData } from '@/common/dummy';

interface DropDownProps {
  theme: string;
}

const DropDown: React.FC<DropDownProps> = React.memo(({ theme }) => (
  <div className="w-28 rounded-md border-1 border-color px-2 py-1">
    {/* @ts-ignore */}
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: theme === 'dark' && 'white' }}
      value="1"
      dataSource={DropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
));

export default DropDown;
