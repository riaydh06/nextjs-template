import React, { FC } from 'react';
import classnames from 'classnames';

const Container: FC<IContainer> = ({
  children,
  component,
  className,
  fluid,
  ...props
}) => {
  const TagName = component;
  const classNames = classnames(`container${fluid ? '-fluid' : ''}`, className);
  return (
    <TagName className={classNames} {...props}>
      {children}
    </TagName>
  );
};

Container.defaultProps = {
  className: '',
  component: 'div',
};

export default Container;
