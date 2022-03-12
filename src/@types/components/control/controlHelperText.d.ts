interface IControlHelperText {
  meta: {
    error?: { tid?: string };
    touched?: boolean;
  };
  helpTextTId?: string;
  helperTextValues?: {
    max?: number;
    remain?: number;
  };
}
