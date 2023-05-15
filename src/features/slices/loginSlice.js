import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  loading: false,
  error: null,
  statusCode: '',
  successMessage: null
};
const loginReducer = createSlice({
  name: 'user_Login',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setStatusCode(state, action) {
      state.statusCode = action.payload;
    },
    setSuccessMessage(state, action) {
      state.successMessage = action.payload;
    },
    setUser(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.user = null;
      state.loading = false;
    }
  },
  extraReducers: {}
});

export const { setLoading, setError, setStatusCode, setUser, setSuccessMessage } =
  loginReducer.actions;
export default loginReducer.reducer;
