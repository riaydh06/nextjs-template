import React from 'react';
import PropTypes from 'prop-types';

import Text, { COLORS as TEXT_COLORS } from '../text/Text';
import { isErrorState } from '../../utils/controls';

const ControlHelperText = (props) => {
  const {
    meta: { error },
    helpTextTId,
    helperTextValues,
  } = props;

  if (isErrorState(props)) {
    const config = error.tid
      ? error
      : {
          tid: error || undefined,
        };

    return (
      <Text
        p
        color={TEXT_COLORS.DANGER}
        className="ml-4 small position-relative bottom-nmd"
        {...config}
      />
    );
  } else {
    if (helpTextTId) {
      return (
        <Text
          color={TEXT_COLORS.DARK_GREY}
          className="ml-4 small"
          values={helperTextValues}
          tid={helpTextTId}
        />
      );
    }
  }

  return null;
};

ControlHelperText.propTypes = {
  helpTextTId: PropTypes.string,
  error: PropTypes.any,
};

export default ControlHelperText;
