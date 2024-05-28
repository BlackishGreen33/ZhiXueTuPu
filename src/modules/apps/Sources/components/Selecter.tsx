import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/ui/select';

const coureses = [
  {
    value: '大学物理',
    label: '大学物理',
  },
  {
    value: '线性代数',
    label: '线性代数',
  },
  {
    value: '数据库原理',
    label: '数据库原理',
  },
  {
    value: '计算机组成原理',
    label: '计算机组成原理',
  },
  {
    value: '软工导论',
    label: '软工导论',
  },
];

const Selecter: React.FC = React.memo(() => {
  return (
    <Select defaultValue="计算机组成原理">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="选择你的课程" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {coureses.map((coures) => (
            <SelectItem key={coures.label} value={coures.value}>
              {coures.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});

export default Selecter;
