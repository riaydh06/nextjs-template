interface ITextArea {
  rows: number;
  maxLength: number;
  scrollHeight: bool;
  helpTextTId: boolean;
  InputProps: object;
  input: {
    value: any;
    onChange?: function;
  };
}
