import { FC } from 'react';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';

import {
  getLabelProps,
  getHelperTextProps,
  getCurrentState,
} from '@utils/controls';

import ControlLabel from './ControlLabel';
import ControlHelperText from './ControlHelperText';
import CustomInput from './CustomInput';
import { FIELDS } from '@constants';

const RenderInput: FC<ITextField> = (props) => {
  const {
    borderColor,
    type,
    placeholderTId,
    placeholder,
    input: { className, ...inputProps },
    InputProps,
    value,
    endAdornment,
    endAdornmentProps = {},
    t,
    styleClasses = '',
    disabled,
  } = props;
  const classNames = classnames(
    'text-field-input',
    `text-field-input--${
      type === FIELDS.ACCOUNT.PASSWORD && borderColor
        ? borderColor
        : getCurrentState(props)
    }`,
    {
      'text-field-input--height': !InputProps.multiline,
    },
    {
      'text-field-input--end-adornment': !!endAdornment,
    },
    'form-control',
    inputProps.className || '',
  );

  const fieldClasses = classnames('text-field-input-container', styleClasses);
  const placeholderValue = placeholderTId ? t(placeholderTId) : placeholder;

  return (
    <div className={fieldClasses}>
      <CustomInput
        type={type}
        placeholder={placeholderValue}
        value={value}
        className={classNames}
        id={inputProps.name}
        {...InputProps}
        {...inputProps}
        disabled={disabled}
      />
      {endAdornment ? (
        <div
          {...endAdornmentProps}
          className={classnames('text-field-input-endAdornment', {
            [endAdornmentProps.className]: !!endAdornmentProps.className,
          })}
        >
          {endAdornment}
        </div>
      ) : null}
    </div>
  );
};

const TextField = (props) => {
  const { withLabel, withHelperText } = props;
  return (
    <div className="my-3">
      {withLabel && <ControlLabel {...getLabelProps(props)} />}
      <RenderInput {...props} />
      {withHelperText && <ControlHelperText {...getHelperTextProps(props)} />}
    </div>
  );
};

TextField.defaultProps = {
  type: 'text',
  withLabel: true,
  withHelperText: true,
  InputProps: {},
};

export default withTranslation()(TextField);
