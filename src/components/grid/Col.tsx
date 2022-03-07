import React, { FC } from 'react';
import classnames from 'classnames';

enum CLASS_NAMES {
  XS = 'col-',
  SM = 'col-sm-',
  MD = 'col-md-',
  LG = 'col-lg-',
}

const BASE_CLASS = `${CLASS_NAMES.XS}${12}`;

export const getClassNames = ({ xs, sm, md, lg, className }: ICol) =>
  classnames(
    !xs && !sm && !md && !lg ? BASE_CLASS : '',
    xs ? `${CLASS_NAMES.XS}${xs}` : '',
    sm ? `${CLASS_NAMES.SM}${sm}` : '',
    md ? `${CLASS_NAMES.MD}${md}` : '',
    lg ? `${CLASS_NAMES.LG}${lg}` : '',
    className,
  );

const Col: FC<ICol> = ({ children, ...props }) => (
  <div className={getClassNames(props)}>{children}</div>
);

export default Col;
