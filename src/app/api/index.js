import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://185.211.170.217/" }),
  reducerPath: "baseApi",
  endpoints: () => ({}),
  tagTypes: ["NEWS"],
});
