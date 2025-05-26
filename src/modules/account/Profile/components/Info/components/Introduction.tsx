import { PiMagicWandThin, PiShapesThin } from 'react-icons/pi';

const Introduction: React.FC = () => (
  <div className="my-4">
    <h2 className="my-4 text-sm font-bold">个人简介</h2>
    <p className="my-3 text-[12px]">
      一个就读软件工程专业的学生 <br /> 有一定的编程基础与项目协作经验 <br />{' '}
      擅长网页与移动应用前后端开发
    </p>
    <div className="mt-6 flex justify-between text-sm">
      <div className="flex items-center gap-x-1">
        <PiShapesThin />
        <span className="font-RubikRegular text-xs">加入平台 6 个月</span>
      </div>
      <div className="flex items-center gap-x-1">
        <PiMagicWandThin />
        <span className="font-RubikRegular text-xs">4 门课程参与</span>
      </div>
    </div>
  </div>
);

export default Introduction;
