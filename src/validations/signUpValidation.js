import { validator, required_custom_trim, maxLength_50, email, name } from '.';

import { FIELDS } from '@constants';

const SIGN_UP = FIELDS.SIGN_UP;

const config = {
  [SIGN_UP.FIRST_NAME]: [
    required_custom_trim('VALIDATION_ERRORS.REQUIRED_FIRST_NAME'),
    name,
    maxLength_50,
  ],
  [SIGN_UP.LAST_NAME]: [
    required_custom_trim('VALIDATION_ERRORS.REQUIRED_LAST_NAME'),
    name,
    maxLength_50,
  ],
  [SIGN_UP.EMAIL]: [
    required_custom_trim('VALIDATION_ERRORS.REQUIRED_EMAIL'),
    email,
  ],
};

export const validate = (values) => validator(values, config);
