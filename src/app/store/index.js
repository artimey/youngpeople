import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api";
import userSlice from "./slices/user";
import accountOptionSlice from "./slices/accountOption";

export const store = configureStore({
  reducer: {
    person: userSlice,
    accountOptions: accountOptionSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
