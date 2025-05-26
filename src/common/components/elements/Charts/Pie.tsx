'use client';

import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PieSeries,
} from '@syncfusion/ej2-react-charts';
import { useTheme } from 'next-themes';
import * as React from 'react';

interface PieProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  legendVisiblity: boolean;
  height: string;
}

const PurePie: React.FC<PieProps> = ({ id, data, legendVisiblity, height }) => {
  const { theme } = useTheme();

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: 'white' }}
      height={height}
      background={theme === 'dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="科目"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};
const Pie = React.memo(PurePie);

export default Pie;
