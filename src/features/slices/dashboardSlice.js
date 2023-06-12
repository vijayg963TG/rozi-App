import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: null
};
const dashboardReducer = createSlice({
  name: 'user_Login',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    }
  }
});

export const { setData } = dashboardReducer.actions;
export default dashboardReducer.reducer;
