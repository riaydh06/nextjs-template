import { SIGN_UP } from '@actions';

const initilState = {
  success: false,
};

const signUpReducer = (state = initilState, action) => {
  switch (action.type) {
    case SIGN_UP.SIGN_UP_SUCCESS:
      return {
        ...state,
        success: true,
      };

    default:
      return state;
  }
};

export default signUpReducer;
