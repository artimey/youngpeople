import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api";
import userSlice from "./slices/user";

export const store = configureStore({
  reducer: {
    person: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
