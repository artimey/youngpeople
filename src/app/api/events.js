import { baseApi } from ".";
import { eventsTransformer } from "../../utils/transformers/events";

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllEvents: build.query({
      query: () => ({ url: "api/events/", method: "GET" }),
      transformResponse(res) {
        return eventsTransformer(res);
      },
    }),
  }),
});

export const { useGetAllEventsQuery } = eventsApi;