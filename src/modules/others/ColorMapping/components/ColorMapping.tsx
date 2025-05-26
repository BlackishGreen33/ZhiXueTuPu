'use client';

import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { ChartsHeader } from '@/common/components/elements';
import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from '@/common/dummy/dummy';

const ColorMapping: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10">
      <ChartsHeader
        category="Color Mappping"
        title="USA CLIMATE - WEATHER BY MONTH"
      />
      <div className="w-full">
        <ChartComponent
          id="charts"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ mode: 'Range', background: 'white' }}
          tooltip={{ enable: true }}
          background={theme === 'dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {rangeColorMapping.map((item, index) => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
