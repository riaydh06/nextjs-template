import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from './TextField';

import { INPUT_FIELD_DEFAULT_VELUES } from '@constants';

class TextArea extends Component {
  state = {
    count: 0,
    height: INPUT_FIELD_DEFAULT_VELUES.DEFAULT_HEIGHT,
  };

  handleCounter = (value) => {
    this.setState(() => ({ count: value.length }));
  };

  onChange = (e, ...args) => {
    const { input, scrollHeight } = this.props;
    this.handleCounter(e.target.value);
    input.onChange(e, ...args);

    if (scrollHeight) {
      e.target.style.height = 'inherit';
      e.target.style.height = `${e.target.scrollHeight + 2}px`;
      this.setState({
        height: e.target.scrollHeight + 2,
      });
    }
  };

  componentDidUpdate({ input: { value } }) {
    const { input } = this.props;

    if (value.length !== input.value.length) {
      this.handleCounter(input.value);
    }
  }

  render() {
    const {
      InputProps = {},
      rows,
      maxLength,
      scrollHeight,
      helpTextTId,
    } = this.props;
    const { count, height } = this.state;

    const helpText = helpTextTId
      ? count === 0
        ? 'TEXT_AREA.TEXT_AREA_TEXT'
        : 'TEXT_AREA.TEXT_AREA_TEXT_REMAIN'
      : '';

    return (
      <TextField
        {...this.props}
        InputProps={{
          multiline: true,
          rows: scrollHeight ? 1 : rows,
          ...InputProps,
          style: scrollHeight
            ? {
                overflow: 'hidden',
                height:
                  count === 0
                    ? INPUT_FIELD_DEFAULT_VELUES.DEFAULT_HEIGHT
                    : height,
              }
            : null,
        }}
        input={{
          ...this.props.input,
          onChange: this.onChange,
        }}
        helpTextTId={helpText}
        helperTextValues={{
          max: maxLength,
          remain: Math.max(maxLength - count, 0),
        }}
      />
    );
  }
}

TextArea.propTypes = {
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  scrollHeight: PropTypes.bool,
  helpTextTId: PropTypes.bool,
};

TextArea.defaultProps = {
  rows: INPUT_FIELD_DEFAULT_VELUES.DEFAULT_ROWS,
  maxLength: INPUT_FIELD_DEFAULT_VELUES.DEFAULT_MAX_LENGTH,
  scrollHeight: false,
  helpTextTId: true,
};

export default TextArea;
