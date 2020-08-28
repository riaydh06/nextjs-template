import React, { Component, Fragment } from 'react';
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

class TextField extends Component {
  renderInput = () => {
    const {
      type,
      id,
      placeholderTId,
      input: { className, ...inputProps },
      InputProps,
      endAdornment,
      endAdornmentProps = {},
      t,
    } = this.props;

    const classNames = classnames(
      `border border-${getCurrentState(this.props)}`,
      'form-control',
      className || '',
    );

    return (
      <Fragment>
        <CustomInput
          type={type}
          placeholder={t(placeholderTId)}
          className={classNames}
          id={id}
          {...InputProps}
          {...inputProps}
        />
        {endAdornment ? (
          <div
            {...endAdornmentProps}
            className={classnames({
              [endAdornmentProps.className]: !!endAdornmentProps.className,
            })}
          >
            {endAdornment}
          </div>
        ) : null}
      </Fragment>
    );
  };

  render() {
    const { withLabel } = this.props;

    return (
      <div className="form-group">
        {withLabel && <ControlLabel {...getLabelProps(this.props)} />}
        {this.renderInput()}
        <ControlHelperText {...getHelperTextProps(this.props)} />
      </div>
    );
  }
}

TextField.defaultProps = {
  type: 'text',
  withLabel: true,
  InputProps: {},
};

export default withTranslation()(TextField);
