interface ISafeText {
  content: string;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  props?: any;
  href?: string;
  target?: string;
}
