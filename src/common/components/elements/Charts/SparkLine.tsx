'use client';

import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';
import * as React from 'react';

interface SparkLineProps {
  id: string;
  height: string;
  width: string;
  color: string;
  data: object[];
  type: 'Line' | 'Column' | 'WinLoss' | 'Pie' | 'Area' | undefined;
  currentColor: string;
}

const PureSparkLine: React.FC<SparkLineProps> = ({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) => (
  <SparklineComponent
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    valueType="Numeric"
    fill={color}
    border={{ color: currentColor, width: 2 }}
    tooltipSettings={{
      visible: true,
      // eslint-disable-next-line no-template-curly-in-string
      format: '${x} 月',
      trackLineSettings: {
        visible: true,
      },
    }}
    markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
    dataSource={data}
    xName="x"
    yName="yval"
    type={type}
  >
    <Inject services={[SparklineTooltip]} />
  </SparklineComponent>
);

const SparkLine = React.memo(PureSparkLine);

export default SparkLine;
