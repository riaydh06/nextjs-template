import api from '@helpers/api';
import { URLS } from '@constants/api';

import { SIGN_UP } from '.';
import { FIELDS } from '@constants';

const postSignUpSuccess = () => ({
  type: SIGN_UP.SIGN_UP_SUCCESS,
});

export const postSignUp = (data) => (dispatch) => {
  const items = {
    contact_message: {
      ...data,
      kind: FIELDS.SIGN_UP.KIND,
    },
  };
  return api.post(URLS, items).then(() => dispatch(postSignUpSuccess()));
};
