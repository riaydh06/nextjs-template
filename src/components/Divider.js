import React from 'react';
import classnames from 'classnames';

const Divider = ({ className }) => (
  <hr className={classnames({ [className]: !!className })} />
);

export default Divider;
