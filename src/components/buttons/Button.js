import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';

import Text, { COLORS as TEXT_COLORS } from '../text/Text';

const DEFAULT_BUTTON_TYPE = 'button';

// List of all available button view types.
export const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',

  LIGHT: 'light',
  DARK: 'dark',
  LINK: 'link',

  PRIMARY_OUTLINE: 'primary-outline',
  SECONDARY_OUTLINE: 'secondary-outline',
  SUCCESS_OUTLINE: 'success-outline',
  INFO_OUTLINE: 'info-outline',
  WARNING_OUTLINE: 'warning-outline',
  DANGER_OUTLINE: 'danger-outline',

  LIGHT_OUTLINE: 'light-outline',
  DARK_OUTLINE: 'dark-outline',
  LINK_OUTLINE: 'link-outline',
};

// Object to map view types to bootstrap class names.
const VARIANT_CLASSNAMES = {
  [VARIANTS.PRIMARY]: 'btn-primary',
  [VARIANTS.SECONDARY]: 'btn-secondary',
  [VARIANTS.SUCCESS]: 'btn-success',
  [VARIANTS.INFO]: 'btn-info',
  [VARIANTS.WARNING]: 'btn-warning',
  [VARIANTS.DANGER]: 'btn-danger',
  [VARIANTS.LIGHT]: 'btn-light',
  [VARIANTS.DARK]: 'btn-dark',
  [VARIANTS.LINK]: 'btn-link',

  [VARIANTS.PRIMARY_OUTLINE]: 'btn-outline-primary',
  [VARIANTS.SECONDARY_OUTLINE]: 'btn-outline-secondary',
  [VARIANTS.SUCCESS_OUTLINE]: 'btn-outline-success',
  [VARIANTS.INFO_OUTLINE]: 'btn-outline-info',
  [VARIANTS.WARNING_OUTLINE]: 'btn-outline-warning',
  [VARIANTS.DANGER_OUTLINE]: 'btn-outline-danger',
  [VARIANTS.LIGHT_OUTLINE]: 'btn-outline-light',
  [VARIANTS.DARK_OUTLINE]: 'btn-outline-dark',
  [VARIANTS.LINK_OUTLINE]: 'btn-outline-link',
};

// Returns button class names list according to passed props.
const getClassNames = (variant, className, block) =>
  classnames('btn', VARIANT_CLASSNAMES[variant], className);

// Return text color according to variant.
const getTextColor = (variant, color) => {
  if (color) {
    return color;
  }

  if (variant === VARIANTS.LIGHT) {
    return TEXT_COLORS.PRIMARY;
  }

  return '';
};

// Component represents button with diffrerent view types.
const Button = React.forwardRef(
  (
    {
      component,
      textComponent,
      children,
      type,
      variant,
      tid,
      tvalues,
      className,
      textVariant,
      textColor,
      block,
      ...props
    },
    ref,
  ) => {
    const WrapComponent = props.to
      ? component
        ? component
        : Link
      : component
      ? component
      : 'button';

    return (
      <WrapComponent
        ref={ref}
        type={type}
        className={getClassNames(variant, className, block)}
        {...props}
      >
        {tid && <Text component={textComponent} tid={tid} values={tvalues} />}
        {children}
      </WrapComponent>
    );
  },
);

Button.defaultProps = {
  type: DEFAULT_BUTTON_TYPE,
  variant: VARIANTS.PRIMARY,
  className: '',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  tid: PropTypes.string,
  to: PropTypes.string,
  block: PropTypes.bool,
};

export default Button;
