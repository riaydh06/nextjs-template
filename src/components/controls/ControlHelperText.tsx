import React, { FC } from 'react';

import Text, { COLORS as TEXT_COLORS } from '../text/Text';
import { isErrorState } from '../../utils/controls';

const ControlHelperText: FC<IControlHelperText> = (props) => {
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
          color={TEXT_COLORS.DARK}
          className="ml-4 small"
          values={helperTextValues}
          tid={helpTextTId}
        />
      );
    }
  }

  return null;
};

export default ControlHelperText;
