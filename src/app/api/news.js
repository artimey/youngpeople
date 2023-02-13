import { baseApi } from ".";
import { newsTransformer } from "../../utils/transformers/news";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllNews: build.query({
      query: () => ({ url: "api/news/", method: "GET" }),
      transformResponse(data) {
        return newsTransformer(data);
      },
      providesTags: ["NEWS"],
    }),
    getNewPage: build.query({
      query: () => ({ url: "api/institutions/", method: "GET" }),
      invalidatesTags: ["NEWS"],
    }),
  }),
});

export const { useGetAllNewsQuery, useLazyGetNewPageQuery } = newsApi;
