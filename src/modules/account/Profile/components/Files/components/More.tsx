import { FaPaperPlane } from 'react-icons/fa';

const More: React.FC = () => (
  <div className="flex items-center justify-end gap-x-3 px-4 py-2">
    <div className="flex items-center gap-x-2 text-sm">
      <p>查看更多</p>
      <FaPaperPlane />
    </div>
  </div>
);

export default More;
