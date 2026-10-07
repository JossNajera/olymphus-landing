import { configureStore, combineReducers } from "@reduxjs/toolkit";
import olymphusReducer from "./Reducers/olymphusReducer";

export const store = configureStore({
    reducer: {
        olympusHome: olymphusReducer
    }
});

