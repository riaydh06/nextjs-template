interface ITextField {
  InputProps: {
    style?: { overflow: string; height: number } | null;
    multiline?: boolean;
    rows?: number;
    className?: string;
  };
  borderColor?: string;
  placeholderTId?: string;
  placeholder?: string;
  input?: {
    name?: string;
    value?: string;
    onChange?: (e: any, ...args: any) => void;
    className?: string;
  };
  value?: string;
  endAdornment?: any;
  endAdornmentProps?: any;
  withLabel?: boolean;
  withHelperText?: boolean;
  disabled?: boolean;
  disableValidation?: boolean;
  t: string;
  styleClasses?: string;
  type?: string;
  helpTextTId?: string;
  helperTextValues?: {
    max?: number;
    remain?: number;
  };
  onChange?: function;
  children?: ReactNode;
  meta?: {
    error?: { tid?: string };
    touched?: boolean;
  };
}
