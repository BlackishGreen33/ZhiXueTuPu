import React from 'react';

interface BorderProps {
  className?: string;
}

const Border: React.FC<BorderProps> = React.memo(({ className }) => {
  return <div className="my-6 border border-[#282828]" />;
});

export default Border;
