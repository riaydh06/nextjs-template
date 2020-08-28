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
}) => ({ name, tid, tvalues, label, color: labelColor });

export const getHelperTextProps = ({
  meta: { error, touched },
  helpTextTId,
  helperTextValues,
}) => ({ meta: { error, touched }, helpTextTId, helperTextValues });

export const getCurrentState = ({
  meta: { error, touched },
  disableValidation,
  InputProps = {},
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

export const isErrorState = (props) => getCurrentState(props) === STATES.ERROR;
export const isValidState = (props) => getCurrentState(props) === STATES.VALID;
export const isPristineState = (props) =>
  getCurrentState(props) === STATES.PRISTINE;
