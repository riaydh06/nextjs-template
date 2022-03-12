import React, { FC } from 'react';
import MaskedInput from 'react-maskedinput';

const CustomInput: FC<ICustomInput> = ({ mask, multiline, ...props }) => {
  const InputWrap: any = mask ? MaskedInput : multiline ? 'textarea' : 'input';
  const inputProps = mask
    ? {
        mask,
        placeholderChar: ' ',
      }
    : {};

  return <InputWrap {...inputProps} {...props} />;
};

export default CustomInput;
