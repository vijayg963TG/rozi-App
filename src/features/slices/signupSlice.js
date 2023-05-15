import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  loading: false,
  data: null,
  error: null,
  successMessage: '',
  statusCode: null
};
const signupReducer = createSlice({
  name: 'user_signup',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSuccessMessage(state, action) {
      state.loading = false;
      state.successMessage = action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.data = null;
      state.loading = null;
    },
    setStatusCode(state, action) {
      state.statusCode = action.payload;
    }
  }
});
export const { setLoading, setError, setSuccessMessage, setStatusCode } = signupReducer.actions;
export default signupReducer.reducer;
