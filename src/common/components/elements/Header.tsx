import * as React from 'react';

interface HeaderProps {
  category: string;
  title: string;
}

const PureHeader: React.FC<HeaderProps> = ({ category, title }) => (
  <div className="mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

const Header = React.memo(PureHeader);

export default Header;
