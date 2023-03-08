import { baseApi } from ".";
import { getNewsRows, newsTransformer } from "../../utils/transformers/news";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getImportantNews: build.query({
      query: () => ({ url: "api/news/", method: "GET" }),
      transformResponse(res) {

        return newsTransformer(res.data);
      },
    }),
    getNewsList: build.query({
      query: () => ({ url: "api/news/", method: "GET" }),
      transformResponse(res) {
        return getNewsRows(
          newsTransformer(res.data),
          res.pagination.currentPage
        );
      },
      providesTags: ["NEWS"],
    }),
  }),
});

export const { useGetImportantNewsQuery, useGetNewsListQuery } = newsApi;
