import { SIGN_UP } from '@actions';

const initialState = {
  success: false,
};

const signUpReducer = (state = initialState, action) => {
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
