'use client';

import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import { useTheme } from 'next-themes';
import * as React from 'react';

import {
  StackedCustomSeries,
  StackedPrimaryXAxis,
  StackedPrimaryYAxis,
} from '@/common/dummy';

interface StackedProps {
  width?: string;
  height?: string;
}

const PureStacked: React.FC<StackedProps> = ({ width, height }) => {
  const { theme } = useTheme();

  return (
    <ChartComponent
      id="charts"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      primaryXAxis={StackedPrimaryXAxis}
      primaryYAxis={StackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={theme === 'dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {StackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

const Stacked = React.memo(PureStacked);

export default Stacked;
