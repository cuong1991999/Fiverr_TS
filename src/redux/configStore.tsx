import { configureStore } from "@reduxjs/toolkit";
import AdminReducer from "./reducer/AdminReducer";
import JobManagementReducer from "./reducer/JobManagementReducer";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
  reducer: {
    JobManagementReducer: JobManagementReducer,
    userReducer: userReducer,
    AdminReducer: AdminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
