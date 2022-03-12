import api from '@helpers/api';
import { URLS } from '@constants/api';
import { Dispatch } from 'redux';

import { SIGN_UP } from '.';
import { FIELDS } from '@constants';

const postSignUpSuccess = () => ({
  type: SIGN_UP.SIGN_UP_SUCCESS,
});

export const postSignUp = (data: object) => (dispatch: Dispatch) => {
  const items = {
    contact_message: {
      ...data,
      kind: FIELDS.SIGN_UP.KIND,
    },
  };
  return api
    .post(URLS.SIGN_UP, items)
    .then(() => dispatch(postSignUpSuccess()));
};
