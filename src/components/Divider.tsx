import React, { FC } from 'react';
import classnames from 'classnames';

const Divider: FC<IDivider> = ({ className }) => (
  <hr className={classnames({ [className]: !!className })} />
);

export default Divider;
