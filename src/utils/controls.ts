export const STATES = {
  INITIAL: 'initial',
  ERROR: 'danger',
  VALID: 'success',
  PRISTINE: 'pristine',
  DISABLED: 'disabled',
};

export const getLabelProps = ({
  input: { name },
  tid,
  tvalues,
  label,
  labelColor,
}: {
  input: { name: string };
  tid?: string;
  tvalues?: any;
  label?: string;
  labelColor?: string;
}) => ({ name, tid, tvalues, label, color: labelColor });

export const getHelperTextProps = ({
  meta: { error, touched },
  helpTextTId,
  helperTextValues,
}: {
  meta: { error?: { tid?: string } | undefined; touched?: any };
  helpTextTId?: any;
  helperTextValues?: any;
}) => ({ meta: { error, touched }, helpTextTId, helperTextValues });

export const getCurrentState = ({
  meta: { error, touched },
  disableValidation,
  InputProps = {},
}: {
  meta: { error?: { tid?: string } | undefined; touched: any };
  disableValidation: any;
  InputProps: {
    disabled?: boolean;
  };
}) => {
  if (disableValidation) {
    return STATES.INITIAL;
  }

  if (InputProps.disabled) {
    return STATES.DISABLED;
  }

  if (!touched) {
    return STATES.PRISTINE;
  }

  if (error && touched) {
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
