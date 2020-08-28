import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const JUSTIFY = {
  START: 'justify-content-start',
  CENTER: 'justify-content-center',
  END: 'justify-content-end',
  AROUND: 'justify-content-around',
  BETWEEN: 'justify-content-between',
};

export const ALIGN = {
  ITEMS_START: 'align-items-start',
  ITEMS_CENTER: 'align-items-center',
  ITEMS_END: 'align-items-end',
  SELF_START: 'align-self-start',
  SELF_CENTER: 'align-self-center',
  SELF_END: 'align-self-end',
};

const Row = ({
  id,
  component,
  children,
  className,
  justify,
  align,
  noGutters,
  ...props
}) => {
  const TagName = component;

  return (
    <TagName
      id={id}
      className={classnames(
        'row',
        justify,
        align,
        {
          'no-gutters': noGutters,
        },
        className,
      )}
      {...props}
    >
      {children}
    </TagName>
  );
};

Row.defaultProps = {
  component: 'div',
  className: '',
  justify: JUSTIFY.START,
  align: '',
  noGutters: false,
};

Row.propTypes = {
  className: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  noGutters: PropTypes.bool,
};

export default Row;
