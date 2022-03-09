import React, { FC } from 'react';
import classnames from 'classnames';

export enum JUSTIFY {
  START = 'justify-content-start',
  CENTER = 'justify-content-center',
  END = 'justify-content-end',
  AROUND = 'justify-content-around',
  BETWEEN = 'justify-content-between',
}

export enum ALIGN {
  ITEMS_START = 'align-items-start',
  ITEMS_CENTER = 'align-items-center',
  ITEMS_END = 'align-items-end',
  SELF_START = 'align-self-start',
  SELF_CENTER = 'align-self-center',
  SELF_END = 'align-self-end',
}

interface IRow {
  id?: string;
  component: keyof JSX.IntrinsicElements;
  className?: string;
  justify?: JUSTIFY;
  align?: ALIGN;
  noGutters?: boolean;
}

const Row: FC<IRow> = ({
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
  noGutters: false,
};

export default Row;
