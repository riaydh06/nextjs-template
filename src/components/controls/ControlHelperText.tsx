import React, { FC } from 'react';

import Text, { COLORS as TEXT_COLORS } from '../text/Text';
import { isErrorState } from '../../utils/controls';

const ControlHelperText: FC<IControlHelperText> = (props) => {
  const {
    meta: { error = {} },
    helpTextTId,
    helperTextValues,
  } = props;

  if (isErrorState(props)) {
    return (
      <Text
        p
        tid={error?.tid ? error.tid : (error as string)}
        color={TEXT_COLORS.DANGER}
        className="ml-4 small position-relative bottom-nmd"
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
