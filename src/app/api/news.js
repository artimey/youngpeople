import { baseApi } from ".";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllNews: build.query({
      query: () => ({ url: "api/news", method: "GET" }),
      providesTags: ["NEWS"],
    }),
    getNewPage: build.query({
      query: () => ({ url: "api/institutions/", method: "GET" }),
      invalidatesTags: ["NEWS"],
    }),
  }),
});

export const { useGetAllNewsQuery, useLazyGetNewPageQuery } = newsApi;
