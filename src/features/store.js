import { configureStore } from "@reduxjs/toolkit";
import rooReducer from "./rootReducer";

const store = configureStore({
    reducer:rooReducer
});
export default store;