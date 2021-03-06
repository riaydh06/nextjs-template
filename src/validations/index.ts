const REQUIRED_TEXT_TID = 'VALIDATION_ERRORS.REQUIRED';

const getErrorConfig = (tid: string, values = {}) => ({
  tid,
  values,
});

export const minLength = (min: number) => (value: number) =>
  value.toString().length >= min
    ? getErrorConfig('VALIDATION_ERRORS.MIN_LENGTH', { min })
    : null;
export const minLength_8 = minLength(8);

export const maxLength =
  (max: number) =>
  (value = '') =>
    (value + '').length > max
      ? getErrorConfig('VALIDATION_ERRORS.MAX_LENGTH', { max })
      : null;
export const maxLength_20 = maxLength(20);
export const maxLength_50 = maxLength(50);
export const maxLength_300 = maxLength(300);

export const name = (value: string) =>
  !/^([A-Za-z'-\s]*)$/.test(value)
    ? getErrorConfig('VALIDATION_ERRORS.NAME')
    : null;

export const email = (value: string) =>
  !/^(([^<>()[\]\\.,;:\s@"']+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value,
  )
    ? getErrorConfig('VALIDATION_ERRORS.EMAIL')
    : null;

export const userName = (value: string) =>
  !/^([A-Za-z0-9_-]*)$/.test(value)
    ? getErrorConfig('VALIDATION_ERRORS.INCORRECT_USERNAME')
    : null;

export const required = (value: string) => {
  if (!value) {
    return REQUIRED_TEXT_TID;
  }

  return null;
};

export const required_custom = (errorId: string) => (value: string) => {
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

export const required_custom_trim = (errorId: string) => (value: string) => {
  if (required_trim(value)) {
    return errorId;
  }

  return null;
};

export const validator = (values: any, config: { [key: string]: any } = {}) => {
  let errors = {};

  Object.keys(config).forEach((field) => {
    let fieldError;
    config[field].some((rule: any) => {
      fieldError = rule(values[field], values);

      return !!fieldError;
    });

    errors = {
      ...errors,
      [field]: fieldError,
    };
  });

  return errors;
};

const TEXT_AREA_MAX_LENGTH = 300;

export const textAreaValidation = (value: any) => {
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
