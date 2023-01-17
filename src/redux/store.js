import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    auth: authReducer,
  },
});
