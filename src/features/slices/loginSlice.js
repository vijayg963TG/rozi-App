import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading:false,
    data:null,
    error:null
};
const loginSlice = createSlice({
name:'user_login',
initialState,
reducers:{
    setLoading(state,action){
        state.loading = action.payload;
    },
    setUser(state,action){
        state.loading = false;
        state.error = null;
        state.data = action.payload;
    },
    setError(state,action){
        state.error = action.payload
        state.data = null;
        state.loading = null;
    }
}
});
export const {setLoading,setError,setUser} = loginSlice.actions;
export default loginSlice.reducer;