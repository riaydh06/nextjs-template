import React, { FC } from 'react';
import classnames from 'classnames';

const SafeText: FC<ISafeText> = ({
  content,
  component,
  className,
  ...props
}) => {
  const Wrap = component || 'div';

  return (
    <Wrap
      {...props}
      className={classnames(className, 'text-break')}
      dangerouslySetInnerHTML={{ __html: content }}
    ></Wrap>
  );
};

export default SafeText;
