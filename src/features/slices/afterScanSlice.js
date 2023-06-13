import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  loading: false,
  error: null,
  statusCode: '',
  showModal: false
};
const afterScanReducer = createSlice({
  name: 'scanData',
  initialState,
  reducers: {
    setShowModal(state) {
      state.showModal = !state.showModal;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setStatusCode(state, action) {
      state.statusCode = action.payload;
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
  }
});

export const { setShowModal, setLoading, setError, setStatusCode, setUser } =
  afterScanReducer.actions;
export default afterScanReducer.reducer;
