import { combineReducers } from '@reduxjs/toolkit';
import signupReducer from './slices/signupSlice';
import loginReducer from './slices/loginSlice';
export const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer
});
export default rootReducer;
