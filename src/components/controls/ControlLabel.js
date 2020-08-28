import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import i18n from 'i18next';

import Text, { COLORS as TEXT_COLORS } from '../text/Text';
import SafeText from '../text/SafeText';

const ControlLabel = ({ name, tid, tvalues, color, component, label }) => {
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

ControlLabel.propTypes = {
  name: PropTypes.string,
  tid: PropTypes.string,
  tvalues: PropTypes.object,
  component: PropTypes.any,
  color: PropTypes.string,
  label: PropTypes.string,
};

export default ControlLabel;
