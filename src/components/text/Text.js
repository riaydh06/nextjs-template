import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';

// List of available colors.
export const COLORS = {
  PRIMARY: 'text-primary',
  SECONDARY: 'text-secondary',

  LIGHT: 'text-light',
  DARK: 'text-dark',

  INFO: 'text-info',
  SUCCESS: 'text-success',
  DANGER: 'text-danger',
  WARNING: 'text-warning',

  BLACK: 'text-black',
  WHITE: 'text-white',

  WHITE: 'text-white',

  MUTED: 'text-muted',
};

// Returns text wrapped with appropriate component according to props.
const getWrappedText = (props, text) => {
  const { p, bold, h3, h2, h1 } = props;
  if (p) {
    return <p className={getClassNames(props)}>{text}</p>;
  } else if (bold) {
    return <b className={getClassNames(props)}>{text}</b>;
  } else if (h3) {
    return <h3 className={getClassNames(props)}>{text}</h3>;
  } else if (h2) {
    return <h2 className={getClassNames(props)}>{text}</h2>;
  } else if (h1) {
    return <h1 className={getClassNames(props)}>{text}</h1>;
  }

  return <span className={getClassNames(props)}>{text}</span>;
};

// Returns class names according to input props.
export const getClassNames = ({ color, center, className, ...props }) =>
  classnames(color, className);

export const getWrapProps = ({ htmlFor }) => ({
  htmlFor,
});

// Plain component without any HOCs.
// Returns translated value according to tid prop.
export const Text = ({ tid, values, children, component, ...props }) => {
  if (!tid) {
    return null;
  }

  const { t } = useTranslation();

  let text = getWrappedText(props, t(tid, values));
  const Wrapper = component;
  // TODO: remove wrapped component
  return (
    <Fragment>
      {text}
      {children}
    </Fragment>
  );
};

Text.defaultProps = {
  component: 'div',
  values: {},
  className: '',
};

Text.propTypes = {
  component: PropTypes.string,
  tid: PropTypes.string,
  values: PropTypes.object,

  className: PropTypes.string,
  color: PropTypes.string,

  p: PropTypes.bool,
  bold: PropTypes.bool,
  h3: PropTypes.bool,
  h2: PropTypes.bool,
  h1: PropTypes.bool,
};

export default Text;
