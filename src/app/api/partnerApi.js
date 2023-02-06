import { baseApi } from ".";

export const partnerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addPartner: build.query({
      query: (arg) => ({ url: "api/forms/booking", method: "POST", body: arg }),
    }),
    getFieldActivities: build.query({
      query: () => ({ url: "api/institutions", method: "GET" }),
    }),
  }),
});

export const { useLazyAddPartnerQuery, useGetFieldActivitiesQuery } =
  partnerApi;
