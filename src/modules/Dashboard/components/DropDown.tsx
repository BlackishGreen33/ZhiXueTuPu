import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

import { DropdownData } from '@/common/dummy';

interface DropDownProps {
  theme: string;
}

const PureDropDown: React.FC<DropDownProps> = ({ theme }) => (
  <div className="w-28 rounded-md border-1 border-color px-2 py-1">
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-expect-error */}
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
);

const DropDown = React.memo(PureDropDown);

export default DropDown;
