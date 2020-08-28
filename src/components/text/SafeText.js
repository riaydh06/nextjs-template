import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SafeText = ({ content, component, className, ...props }) => {
  const Wrap = component || 'div';

  return (
    <Wrap
      {...props}
      className={classnames(className, 'text-break')}
      dangerouslySetInnerHTML={{ __html: content }}
    ></Wrap>
  );
};

SafeText.propTypes = {
  content: PropTypes.string,
};

export default SafeText;
