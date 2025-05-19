import * as React from 'react';

interface BorderProps {
  className?: string;
}

const Border: React.FC<BorderProps> = React.memo(({ className }) => {
  return <div className={`border border-[#282828] ${className}`} />;
});

export default Border;
