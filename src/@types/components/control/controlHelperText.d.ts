interface IControlHelperText {
  meta: {
    error?: { tid?: string } | undefined;
    touched?: any;
  };
  helpTextTId?: string;
  helperTextValues?: {
    max?: number;
    remain?: number;
  };
}
