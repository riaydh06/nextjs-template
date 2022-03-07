import React from 'react';
import MaskedInput from 'react-maskedinput';

const CustomInput = ({ mask, multiline, ...props }) => {
  const InputWrap = mask ? MaskedInput : multiline ? 'textarea' : 'input';
  const inputProps = mask
    ? {
        mask,
        placeholderChar: ' ',
      }
    : {};

  return <InputWrap {...inputProps} {...props} />;
};

export default CustomInput;
