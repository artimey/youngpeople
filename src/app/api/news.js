import { baseApi } from ".";
import { getNewsRows, newsTransformer } from "../../utils/transformers/news";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getImportantNews: build.query({
      query: () => ({ url: "api/news_test/", method: "GET" }),
      transformResponse(res) {
        console.log("getImportantNews", newsTransformer(res.data));

        return newsTransformer(res.data);
      },
    }),
    getNewsList: build.query({
      query: () => ({ url: "api/news_test/", method: "GET" }),
      transformResponse(res) {
        console.log(
          "getNewsList",
          getNewsRows(newsTransformer(res.data), res.pagination.currentPage)
        );

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
