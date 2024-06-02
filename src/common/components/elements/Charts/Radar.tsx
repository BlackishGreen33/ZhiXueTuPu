'use client';

import { Browser, EmitType } from '@syncfusion/ej2-base';
import {
  AreaSeries,
  Category,
  ChartComponent,
  ChartSeriesType,
  ChartTheme,
  Highlight,
  ILoadedEventArgs,
  Inject,
  Legend,
  PolarSeries,
  RadarSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, { useRef, useState } from 'react';

export const RadarChartData = [
  [
    { x: '1月', y: 4 },
    { x: '2月', y: 3.0 },
    { x: '3月', y: 3.8 },
    { x: '4月', y: 3.4 },
    { x: '5月', y: 3.2 },
    { x: '6月', y: 3.9 },
  ],
  [
    { x: '1月', y: 2.6 },
    { x: '2月', y: 2.8 },
    { x: '3月', y: 2.6 },
    { x: '4月', y: 3 },
    { x: '5月', y: 3.6 },
    { x: '6月', y: 3 },
  ],
  [
    { x: '1月', y: 2.8 },
    { x: '2月', y: 2.5 },
    { x: '3月', y: 2.8 },
    { x: '4月', y: 3.2 },
    { x: '5月', y: 2.9 },
    { x: '6月', y: 2 },
  ],
  [
    { x: '1月', y: 2.8 },
    { x: '2月', y: 2.5 },
    { x: '3月', y: 2.8 },
    { x: '4月', y: 3.2 },
    { x: '5月', y: 2.9 },
    { x: '6月', y: 2 },
  ],
];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const Radar: React.FC = React.memo(() => {
  const [type] = useState<ChartSeriesType>('Polar');
  let chartInstance = useRef<ChartComponent>(null);
  let dropElement = useRef<DropDownListComponent>(null);
  let loaded: EmitType<ILoadedEventArgs>;

  const onChartLoad = (args: ILoadedEventArgs): void => {
    document.getElementById('charts')!.setAttribute('title', '');
  };
  const load = (args: ILoadedEventArgs): void => {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, 'Dark')
      .replace(/contrast/i, 'Contrast') as ChartTheme;
  };
  const change = (): void => {
    chartInstance.current!.series[0].type = dropElement.current!
      .value as ChartSeriesType;
    chartInstance.current!.series[1].type = dropElement.current!
      .value as ChartSeriesType;
    chartInstance.current!.series[2].type = dropElement.current!
      .value as ChartSeriesType;
    chartInstance.current!.series[0].animation!.enable = false;
    chartInstance.current!.series[1].animation!.enable = false;
    chartInstance.current!.series[2].animation!.enable = false;
    chartInstance.current!.refresh();
  };
  let droplist: { [key: string]: Object }[] = [{ value: 'Radar' }];

  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section row">
        <div className="col-md-8">
          <ChartComponent
            id="charts"
            ref={chartInstance}
            primaryXAxis={{
              valueType: 'Category',
              labelPlacement: 'OnTicks',
              interval: 1,
              coefficient: Browser.isDevice ? 80 : 100,
            }}
            primaryYAxis={{
              title: '成绩雷达图',
              labelFormat: '{value}M',
            }}
            legendSettings={{ visible: true, enableHighlight: true }}
            tooltip={{ enable: true }}
            load={load.bind(this)}
            loaded={onChartLoad.bind(this)}
          >
            <Inject
              services={[
                AreaSeries,
                Legend,
                Category,
                PolarSeries,
                RadarSeries,
                Highlight,
                Tooltip,
              ]}
            />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={RadarChartData[0]}
                xName="x"
                yName="y"
                name="计算机组成原理"
                width={2}
                opacity={0.5}
                type={type}
                drawType="Area"
                border={{ color: 'transparent' }}
              />
              <SeriesDirective
                dataSource={RadarChartData[1]}
                xName="x"
                yName="y"
                name="数据结构"
                width={2}
                opacity={0.5}
                type={type}
                drawType="Area"
                border={{ color: 'transparent' }}
              />
              <SeriesDirective
                dataSource={RadarChartData[2]}
                xName="x"
                yName="y"
                name="数据库原理"
                width={2}
                opacity={0.5}
                type={type}
                drawType="Area"
                border={{ color: 'transparent' }}
              />
              <SeriesDirective
                dataSource={RadarChartData[3]}
                xName="x"
                yName="y"
                name="软件工程导论"
                width={2}
                opacity={0.5}
                type={type}
                drawType="Area"
                border={{ color: 'transparent' }}
              />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
        <div className="col-md-4 property-section">
          <table
            id="property"
            title="Properties"
            className="property-panel-table"
            style={{ width: '100%' }}
          >
            <tbody>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '40%' }}>
                  <div>
                    <DropDownListComponent
                      width={120}
                      id="selmode"
                      change={change.bind(this)}
                      ref={dropElement}
                      dataSource={droplist}
                      fields={{ text: 'value', value: 'value' }}
                      value={type}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

export default Radar;
