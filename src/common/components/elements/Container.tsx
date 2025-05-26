import * as React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  [propName: string]: React.ReactNode | string | undefined;
}

const PureContainer: React.FC<ContainerProps> = ({
  children,
  className = '',
  ...others
}) => (
  <div className={`mb-10 mt-20 p-8 lg:mt-0 ${className} `} {...others}>
    {children}
  </div>
);

const Container = React.memo(PureContainer);

export default Container;
