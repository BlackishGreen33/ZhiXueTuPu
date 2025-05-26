'use client';

import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import { useTheme } from 'next-themes';
import * as React from 'react';

import {
  LineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from '@/common/dummy';

const PureLineChart: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      primaryXAxis={LinePrimaryXAxis}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={theme === 'dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {LineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

const LineChart = React.memo(PureLineChart);

export default LineChart;
