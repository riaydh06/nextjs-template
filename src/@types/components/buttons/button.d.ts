interface IButton
  extends IButtonStyleAttributes,
    React.HTMLProps<HTMLButtonElement> {
  component?: React.ElementType;
  textComponent?: keyof JSX.IntrinsicElements;
  type?: 'submit' | 'reset' | 'button';
  tid?: string;
  // TODO fix any
  tvalues?: any;
  textVariant?: TEXT_VARIANTS;
  to?: string;
}

interface IButtonStyleAttributes {
  variant?: VARIANTS;
  className?: string;
  block?: boolean;
  color?: TEXT_COLORS | string;
  textColor?: TEXT_COLORS;
  smallHeight?: boolean;
}
