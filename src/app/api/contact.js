import { baseApi } from ".";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    contactUs: build.query({
      query: (arg) => ({
        url: "api/forms/booking/",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const { useLazyContactUsQuery } = contactApi;
