import { baseApi } from ".";
import { eventsTransformer } from "../../utils/transformers/events";
// api/events/
export const eventsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllEvents: build.query({
      query: (queryParam) => {
        return {
          url: !queryParam
            ? "api/events/"
            : `api/events/?LINK_PROJECT=${queryParam}`,
          method: "GET",
        };
      },
      transformResponse(res) {
        return eventsTransformer(res);
      },
    }),
  }),
});

export const { useGetAllEventsQuery } = eventsApi;
