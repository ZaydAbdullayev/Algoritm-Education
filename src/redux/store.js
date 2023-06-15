import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reLoading } from "./loading";

export const store = configureStore({
  reducer: combineReducers({
    loading: reLoading,
  }),
  devTools: process.env.NODE_ENV !== "production",
});
