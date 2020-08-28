import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Container = ({ children, component, className, fluid, ...props }) => {
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

Container.propTypes = {
  className: PropTypes.string,
  component: PropTypes.any,
};

export default Container;
