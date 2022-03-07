import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TextField from './TextField';

import { INPUT_FIELD_DEFAULT_VALUES } from '@constants';

const TextArea = (props) => {
  const [value, setValue] = useState('');
  const [height, setHeight] = useState(
    INPUT_FIELD_DEFAULT_VALUES.DEFAULT_HEIGHT,
  );

  useEffect(() => {
    setValue(props.input.value);
  }, [props.input.value]);

  const onChange = (e, ...args) => {
    const { input, scrollHeight } = props;

    setValue(e.target.value);
    input.onChange(e, ...args);

    if (scrollHeight) {
      e.target.style.height = 'inherit';
      e.target.style.height = `${e.target.scrollHeight + 2}px`;
      setHeight(e.target.scrollHeight + 2);
    }
  };

  const { InputProps = {}, rows, maxLength, scrollHeight, helpTextTId } = props;
  const count = value.length;

  const helpText = helpTextTId
    ? count === 0
      ? 'TEXT_AREA.TEXT_AREA_TEXT'
      : 'TEXT_AREA.TEXT_AREA_TEXT_REMAIN'
    : '';

  return (
    <TextField
      {...props}
      InputProps={{
        multiline: true,
        rows: scrollHeight ? 1 : rows,
        ...InputProps,
        style: scrollHeight
          ? {
              overflow: 'hidden',
              height:
                count === 0
                  ? INPUT_FIELD_DEFAULT_VALUES.DEFAULT_HEIGHT
                  : height,
            }
          : null,
      }}
      input={{
        ...props.input,
        value: value,
        onChange: onChange,
      }}
      helpTextTId={helpText}
      helperTextValues={{
        max: maxLength,
        remain: Math.max(maxLength - count, 0),
      }}
    />
  );
};

TextArea.propTypes = {
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  scrollHeight: PropTypes.bool,
  helpTextTId: PropTypes.bool,
};

TextArea.defaultProps = {
  rows: INPUT_FIELD_DEFAULT_VALUES.DEFAULT_ROWS,
  maxLength: INPUT_FIELD_DEFAULT_VALUES.DEFAULT_MAX_LENGTH,
  scrollHeight: false,
  helpTextTId: true,
};

export default TextArea;
