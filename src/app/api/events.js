import { baseApi } from ".";
import { eventsTransformer } from "../../utils/transformers/events";

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProjects: build.query({
      query: () => ({ url: "api/events/", method: "GET" }),
      transformResponse(res) {
        return eventsTransformer(res);
      },
    }),
  }),
});

export const { useGetAllProjectsQuery } = eventsApi;