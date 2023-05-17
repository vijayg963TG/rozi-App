import { combineReducers } from '@reduxjs/toolkit';
import signupReducer from './slices/signupSlice';
import loginReducer from './slices/loginSlice';
import afterScanReducer from './slices/afterScanSlice';

export const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  afterScan:afterScanReducer
});
export default rootReducer;
