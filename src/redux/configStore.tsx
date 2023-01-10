import { configureStore } from "@reduxjs/toolkit";
import JobManagementReducer from "./reducer/JobManagementReducer";

export const store = configureStore({
  reducer: {
    JobManagementReducer: JobManagementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
