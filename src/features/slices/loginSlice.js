import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  loading: false,
  error: null,
  statusCode: '',
  successMessage: null,
  tokenData: null
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
    },
    setTokenData(state, action) {
      state.tokenData = action.payload;
    }
  }
});

export const { setLoading, setError, setStatusCode, setUser, setSuccessMessage, setTokenData } =
  loginReducer.actions;
export default loginReducer.reducer;
