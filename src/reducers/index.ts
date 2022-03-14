import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import signUpReducer from './signUpReducer';

const rootReducer = combineReducers({
  form,
  signUp: signUpReducer,
});

export default rootReducer;
