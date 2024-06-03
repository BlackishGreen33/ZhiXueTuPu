export const LineChartData = [
  [
    { x: new Date(2024, 0, 1), y: 21 },
    { x: new Date(2024, 0, 2), y: 24 },
    { x: new Date(2024, 0, 3), y: 36 },
    { x: new Date(2024, 0, 4), y: 38 },
    { x: new Date(2024, 0, 5), y: 54 },
    { x: new Date(2024, 0, 6), y: 57 },
  ],
  [
    { x: new Date(2024, 0, 1), y: 28 },
    { x: new Date(2024, 0, 2), y: 44 },
    { x: new Date(2024, 0, 3), y: 48 },
    { x: new Date(2024, 0, 4), y: 50 },
    { x: new Date(2024, 0, 5), y: 66 },
    { x: new Date(2024, 0, 6), y: 78 },
  ],
  [
    { x: new Date(2024, 0, 1), y: 10 },
    { x: new Date(2024, 0, 2), y: 20 },
    { x: new Date(2024, 0, 3), y: 30 },
    { x: new Date(2024, 0, 4), y: 39 },
    { x: new Date(2024, 0, 5), y: 50 },
    { x: new Date(2024, 0, 6), y: 70 },
  ],
  [
    { x: new Date(2024, 0, 1), y: 11 },
    { x: new Date(2024, 0, 2), y: 21 },
    { x: new Date(2024, 0, 3), y: 35 },
    { x: new Date(2024, 0, 4), y: 34 },
    { x: new Date(2024, 0, 5), y: 58 },
    { x: new Date(2024, 0, 6), y: 79 },
  ],
];

export const LineCustomSeries = [
  {
    dataSource: LineChartData[0],
    xName: 'x',
    yName: 'y',
    name: '计算机组成原理',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },

  {
    dataSource: LineChartData[1],
    xName: 'x',
    yName: 'y',
    name: '数据结构',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },
  {
    dataSource: LineChartData[2],
    xName: 'x',
    yName: 'y',
    name: '数据库原理',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },
  {
    dataSource: LineChartData[3],
    xName: 'x',
    yName: 'y',
    name: '软件工程导论',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },
];

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Mouth',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};
