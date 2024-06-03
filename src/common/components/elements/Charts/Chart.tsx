import * as echarts from 'echarts';
import React, { useEffect } from 'react';

import { genKey } from '@/common/utils/keyGen';

import {
  EchartComponentProps,
  generateLineDataTemplate,
  generateMindMap,
  generateRiver,
} from './Chart.config';

const EChartComponent: React.FC<EchartComponentProps> = ({
  data,
  id,
  type,
  complexity,
  ...restProps
}) => {
  const unique_id = `chart_${genKey.next().value}`;
  useEffect(() => {
    const chart = echarts.init(document.getElementById(unique_id));
    let options;
    switch (type) {
      case 'line':
        options = generateLineDataTemplate(data);
        break;
      case 'mind':
        options = generateMindMap(complexity);
        break;
      case 'river':
        options = generateRiver();
    }
    chart.setOption(options);
    return () => {
      chart.dispose();
    };
  }, []);

  return <div id={unique_id} {...restProps} />;
};

export default EChartComponent;
