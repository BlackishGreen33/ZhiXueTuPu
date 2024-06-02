export const StackedChartData = [
  [
    { x: 'Jan', y: 21100.1 },
    { x: 'Feb', y: 22700.3 },
    { x: 'Mar', y: 24300.4 },
    { x: 'Apr', y: 25900.9 },
    { x: 'May', y: 25900.9 },
    { x: 'Jun', y: 25900.9 },
    { x: 'July', y: 25900.9 },
  ],
  [
    { x: 'Jan', y: 17100.1 },
    { x: 'Feb', y: 17700.3 },
    { x: 'Mar', y: 18300.4 },
    { x: 'Apr', y: 19900.9 },
    { x: 'May', y: 21900.9 },
    { x: 'Jun', y: 21900.9 },
    { x: 'July', y: 23900.9 },
  ],
];

export const StackedCustomSeries = [
  {
    dataSource: StackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: '学习时长',
    type: 'StackingColumn',
    background: 'blue',
  },

  {
    dataSource: StackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: '闲置时长',
    type: 'StackingColumn',
    background: 'red',
  },
];

export const StackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const StackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 10000,
  maximum: 50000,
  interval: 10000,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};
