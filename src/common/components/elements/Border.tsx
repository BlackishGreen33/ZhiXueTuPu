import * as React from 'react';

interface BorderProps {
  className?: string;
}

const PureBorder: React.FC<BorderProps> = ({ className }) => (
  <div className={`border border-[#282828] ${className}`} />
);

const Border = React.memo(PureBorder);

export default Border;
