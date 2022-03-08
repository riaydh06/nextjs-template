import React, { FC } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import i18n from 'i18next';

import Text from '../text/Text';
import SafeText from '../text/SafeText';

const ControlLabel: FC<IControlLabel> = ({
  name,
  tid,
  tvalues,
  color,
  component,
  label,
}) => {
  if (tid && !i18n.exists(tid)) {
    return null;
  }

  const WrapComponent = component || 'label';
  const className = classnames(color, 'ml-4');

  return (
    <WrapComponent htmlFor={name}>
      {label ? (
        <SafeText content={label} className={className} />
      ) : (
        <Text tid={tid} values={tvalues} className={className} />
      )}
    </WrapComponent>
  );
};

export default ControlLabel;
