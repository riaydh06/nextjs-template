interface ITextArea {
  rows: number;
  maxLength: number;
  scrollHeight: bool;
  helpTextTId: bool;
  InputProps: object;
  input: {
    value: any;
    onChange?: function;
  };
}
