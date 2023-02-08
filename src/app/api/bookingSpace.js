import { baseApi } from ".";

export const bookingSpaceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    bookSpace: build.query({
      query: (arg) => ({ url: "api/forms/booking/", method: "POST", body: arg }),
    }),
  }),
});

export const { useLazyBookSpaceQuery } = bookingSpaceApi;
