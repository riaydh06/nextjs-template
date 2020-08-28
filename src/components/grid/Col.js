import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CLASS_NAMES = {
  XS: 'col-',
  SM: 'col-sm-',
  MD: 'col-md-',
  LG: 'col-lg-',
};

const BASE_CLASS = `${CLASS_NAMES.XS}${12}`;

export const getClassNames = ({ xs, sm, md, lg, className }) =>
  classnames(
    !xs && !sm && !md && !lg ? BASE_CLASS : '',
    xs ? `${CLASS_NAMES.XS}${xs}` : '',
    sm ? `${CLASS_NAMES.SM}${sm}` : '',
    md ? `${CLASS_NAMES.MD}${md}` : '',
    lg ? `${CLASS_NAMES.LG}${lg}` : '',
    className,
  );

const Col = ({ children, ...props }) => (
  <div className={getClassNames(props)}>{children}</div>
);

Col.defaultProps = {
  className: '',
};

Col.propTypes = {
  className: PropTypes.string,
};

export default Col;
