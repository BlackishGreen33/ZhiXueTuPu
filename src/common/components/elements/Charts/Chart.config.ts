import { HTMLAttributes } from 'react';

import { largeMindConfi, mindMapConfig } from './mindMap.config';

export type chartType = 'line' | 'river' | 'mind';

export interface EchartComponentProps extends HTMLAttributes<HTMLDivElement> {
  data: { data: { [key: string]: number[] }; title: string; xNames: string[] };
  type: chartType;
  complexity?: 'complex' | 'simple';
}
export const chartConfig = {
  line: {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      itemWidth: 10,
      itemHeight: 10,
      orient: 'horizontal',
      itemGap: 2,
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  },
  river: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgba(0,0,0,0.2)',
          width: 1,
          type: 'solid',
        },
      },
    },
    legend: {
      data: ['中英文学差异', '文化交流', '对比学习', '第二语言'],
    },
    singleAxis: {
      top: 50,
      bottom: 50,
      axisTick: {},
      axisLabel: {},
      type: 'time',
      axisPointer: {
        animation: true,
        label: {
          show: true,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          opacity: 0.2,
        },
      },
    },
    series: [
      {
        type: 'themeRiver',
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: 'rgba(0, 0, 0, 0.8)',
          },
        },
        data: [
          ['2013/06', 10, '中英文学差异'],
          ['2013/12', 15, '中英文学差异'],
          ['2014/06', 35, '中英文学差异'],
          ['2014/12', 38, '中英文学差异'],
          ['2015/06', 22, '中英文学差异'],
          ['2015/12', 16, '中英文学差异'],
          ['2016/06', 7, '中英文学差异'],
          ['2016/12', 2, '中英文学差异'],
          ['2017/06', 17, '中英文学差异'],
          ['2017/12', 33, '中英文学差异'],
          ['2018/06', 40, '中英文学差异'],
          ['2018/12', 32, '中英文学差异'],
          ['2019/06', 26, '中英文学差异'],
          ['2019/12', 35, '中英文学差异'],
          ['2020/06', 40, '中英文学差异'],
          ['2020/12', 32, '中英文学差异'],
          ['2021/06', 26, '中英文学差异'],
          ['2021/12', 22, '中英文学差异'],
          ['2022/06', 16, '中英文学差异'],
          ['2022/12', 22, '中英文学差异'],
          ['2023/06', 10, '中英文学差异'],
          ['2013/06', 35, '文化交流'],
          ['2013/12', 36, '文化交流'],
          ['2014/06', 37, '文化交流'],
          ['2014/12', 22, '文化交流'],
          ['2015/06', 24, '文化交流'],
          ['2015/12', 26, '文化交流'],
          ['2016/06', 34, '文化交流'],
          ['2016/12', 21, '文化交流'],
          ['2017/06', 18, '文化交流'],
          ['2017/12', 45, '文化交流'],
          ['2018/06', 32, '文化交流'],
          ['2018/12', 35, '文化交流'],
          ['2019/06', 30, '文化交流'],
          ['2019/12', 28, '文化交流'],
          ['2020/06', 27, '文化交流'],
          ['2020/12', 26, '文化交流'],
          ['2021/06', 15, '文化交流'],
          ['2021/12', 30, '文化交流'],
          ['2022/06', 35, '文化交流'],
          ['2022/12', 42, '文化交流'],
          ['2023/06', 42, '文化交流'],
          ['2013/06', 21, '第二语言'],
          ['2013/12', 25, '第二语言'],
          ['2014/06', 27, '第二语言'],
          ['2014/12', 23, '第二语言'],
          ['2015/06', 24, '第二语言'],
          ['2015/12', 21, '第二语言'],
          ['2016/06', 35, '第二语言'],
          ['2016/12', 39, '第二语言'],
          ['2017/06', 40, '第二语言'],
          ['2017/12', 36, '第二语言'],
          ['2018/06', 33, '第二语言'],
          ['2018/12', 43, '第二语言'],
          ['2019/06', 40, '第二语言'],
          ['2019/12', 34, '第二语言'],
          ['2020/06', 28, '第二语言'],
          ['2020/12', 26, '第二语言'],
          ['2021/06', 37, '第二语言'],
          ['2021/12', 41, '第二语言'],
          ['2022/06', 46, '第二语言'],
          ['2022/12', 47, '第二语言'],
          ['2023/06', 41, '第二语言'],
          ['2013/06', 10, '对比学习'],
          ['2013/12', 15, '对比学习'],
          ['2014/06', 35, '对比学习'],
          ['2014/12', 38, '对比学习'],
          ['2015/06', 22, '对比学习'],
          ['2015/12', 16, '对比学习'],
          ['2016/06', 7, '对比学习'],
          ['2016/12', 2, '对比学习'],
          ['2017/06', 17, '对比学习'],
          ['2017/12', 33, '对比学习'],
          ['2018/06', 40, '对比学习'],
          ['2018/12', 32, '对比学习'],
          ['2019/06', 26, '对比学习'],
          ['2019/12', 35, '对比学习'],
          ['2020/06', 40, '对比学习'],
          ['2020/12', 32, '对比学习'],
          ['2021/06', 26, '对比学习'],
          ['2021/12', 22, '对比学习'],
          ['2022/06', 16, '对比学习'],
          ['2022/12', 22, '对比学习'],
          ['2023/06', 10, '对比学习'],
        ],
      },
    ],
  },
};
export const generateLineDataTemplate = (
  props: EchartComponentProps['data']
) => {
  const { xNames, data } = props;
  const newConfig = chartConfig.line;
  newConfig.legend.data = Object.keys(data);
  newConfig.xAxis.data = xNames;
  const newSeries = Object.keys(data).map((item) => ({
    name: item,
    type: 'line',
    stack: 'Total',
    data: data[item],
  }));
  newConfig.series = newSeries;
  return newConfig;
};

export const generateMindMap = (complexity?: 'complex' | 'simple') => {
  const graph = complexity === 'complex' ? largeMindConfi : mindMapConfig;
  if (complexity === 'complex') {
    graph.nodes.forEach(function (node) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      node.label = {
        show: node.symbolSize > 30,
      };
    });
  }
  return {
    tooltip: {},
    legend: [
      {
        data: graph.categories.map(function (a) {
          return a.name;
        }),
      },
    ],
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
        labelLayout: {
          hideOverlap: true,
        },
        scaleLimit: {
          min: 0.4,
          max: 2,
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3,
        },
      },
    ],
  };
};
export const generateRiver = () => chartConfig.river;
