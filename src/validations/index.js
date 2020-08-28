const REQUIRED_TEXT_TID = 'VALIDATION_ERRORS.REQUIRED';

const getErrorConfig = (tid, values = {}) => ({
  tid,
  values,
});

export const minLength = (min) => (value) =>
  value.toString().length >= min
    ? getErrorConfig('VALIDATION_ERRORS.MIN_LENGTH', { min })
    : null;
export const minLength_8 = minLength(8);

export const maxLength = (max) => (value = '') =>
  (value + '').length > max
    ? getErrorConfig('VALIDATION_ERRORS.MAX_LENGTH', { max })
    : null;
export const maxLength_20 = maxLength(20);
export const maxLength_50 = maxLength(50);
export const maxLength_300 = maxLength(300);

export const name = (value) =>
  !/^([A-Za-z'-\s]*)$/.test(value)
    ? getErrorConfig('VALIDATION_ERRORS.NAME')
    : null;

export const email = (value) =>
  !/^(([^<>()[\]\\.,;:\s@"']+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value,
  )
    ? getErrorConfig('VALIDATION_ERRORS.EMAIL')
    : null;

export const userName = (value) =>
  !/^([A-Za-z0-9_-]*)$/.test(value)
    ? getErrorConfig('VALIDATION_ERRORS.INCORRECT_USERNAME')
    : null;

export const required = (value) => {
  if (!value) {
    return REQUIRED_TEXT_TID;
  }

  return null;
};

export const required_custom = (errorId) => (value) => {
  if (required(value)) {
    return errorId;
  }

  return null;
};

export const required_trim = (value = '') => {
  if (!value || !value.toString().trim()) {
    return REQUIRED_TEXT_TID;
  }

  return null;
};

export const required_custom_trim = (errorId) => (value) => {
  if (required_trim(value)) {
    return errorId;
  }

  return null;
};

export const validator = (values, config = {}) => {
  const errors = {};

  Object.keys(config).forEach((field) => {
    let fieldError;
    config[field].some((rule) => {
      fieldError = rule(values[field], values);

      return !!fieldError;
    });

    errors[field] = fieldError;
  });

  return errors;
};

const TEXT_AREA_MAX_LENGTH = 300;

export const textAreaValidation = (value) => {
  if (required_trim(value)) {
    return required_trim(value);
  }

  if (maxLength_300(value)) {
    return {
      tid: 'TEXT_AREA.TEXT_AREA_LENGTH_ERROR',
      values: {
        max: TEXT_AREA_MAX_LENGTH,
        over: value.length - TEXT_AREA_MAX_LENGTH,
      },
    };
  }
};
