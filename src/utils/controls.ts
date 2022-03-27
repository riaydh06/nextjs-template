export const STATES = {
  INITIAL: 'initial',
  ERROR: 'danger',
  VALID: 'success',
  PRISTINE: 'pristine',
  DISABLED: 'disabled',
};

type GetLabelProps = {
  input?: { name?: string };
  tid?: string;
  tvalues?: any;
  label?: string;
  labelColor?: string;
};

export const getLabelProps = ({
  input,
  tid,
  tvalues,
  label,
  labelColor,
}: GetLabelProps) => ({
  name: input?.name || '',
  tid,
  tvalues,
  label,
  color: labelColor,
});

type GetHelperTextProps = {
  meta?: { error?: { tid?: string }; touched?: boolean };
  helpTextTId?: any;
  helperTextValues?: any;
};

export const getHelperTextProps = ({
  meta,
  helpTextTId,
  helperTextValues,
}: GetHelperTextProps) => ({
  meta: { error: meta?.error, touched: meta?.touched },
  helpTextTId,
  helperTextValues,
});

type GetCurrentState = {
  meta?: { error?: { tid?: string }; touched?: boolean };
  disableValidation?: any;
  InputProps: {
    style?: { overflow: string; height: number } | null;
    multiline?: boolean;
    rows?: number;
    className?: string;
    disabled?: boolean;
  };
};

export const getCurrentState = ({
  meta,
  disableValidation,
  InputProps = {},
}: GetCurrentState) => {
  if (disableValidation) {
    return STATES.INITIAL;
  }

  if (InputProps.disabled) {
    return STATES.DISABLED;
  }

  if (!meta?.touched) {
    return STATES.PRISTINE;
  }

  if (meta?.error && meta?.touched) {
    return STATES.ERROR;
  }

  return STATES.VALID;
};

export const isErrorState = (props: any) =>
  getCurrentState(props) === STATES.ERROR;
export const isValidState = (props: any) =>
  getCurrentState(props) === STATES.VALID;
export const isPristineState = (props: any) =>
  getCurrentState(props) === STATES.PRISTINE;
