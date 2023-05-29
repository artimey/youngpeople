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
    createEvent: build.query({
      async queryFn(arg, queryApi, _, fetchWithBQ) {
        const event = new FormData();
        event.append("METHOD", "ADD");
        event.append("TYPE_DATA", "EVENT");
        event.append("USER_ID", arg.userId);
        event.append("UF_API_KEY", arg.apiKey);
        event.append("NAME", arg.name);
        event.append("FOTO", arg.photo);
        event.append("TYPE_EVENT", arg.eventType);
        event.append("DATE", arg.date);
        event.append("PLACE", arg.place);
        event.append("DETAIL_TEXT", arg.detail);
        const res = await fetchWithBQ({
          url: "/api/events/add/",
          method: "POST",
          body: event,
        });
        if (res?.data) {
          if (res.data?.TYPE === "ERROR") {
            return { data: res.data["MESSAGE"] };
          }
          return { data: res?.data };
        }
        return {
          data: null,
        };
      },
    }),
    getUserEvents: build.query({
      async queryFn(arg, queryApi, _, fetchWithBQ) {
        const state = queryApi.getState();
        const res = await fetchWithBQ(
          `/api/events/?SUBSCUBES=${state.person?.userId}`
        );
        if (res?.data?.data) {
          if (res.data?.TYPE === "ERROR") {
            return { data: null };
          }
          return { data: eventsTransformer(res?.data) };
        }
        return {
          data: null,
        };
      },
    }),
    getPartnerEvents: build.query({
      async queryFn(arg, queryApi, _, fetchWithBQ) {
        const state = queryApi.getState();
        const res = await fetchWithBQ(
          `/api/events/?LINK_PARTNER=${state.person?.userId}`
        );
        console.log("state", state);
        console.log("res", res);
        if (res?.data?.data) {
          if (res.data?.TYPE === "ERROR") {
            return { data: null };
          }
          return { data: eventsTransformer(res?.data) };
        }
        return {
          data: null,
        };
      },
    }),
    eventSubscribe: build.query({
      async queryFn(arg, queryApi, _, fetchWithBQ) {
        const state = queryApi.getState();
        const event = new FormData();
        event.append("EVENT ", arg.eventId);
        event.append("USER_ID", state?.person?.userId);
        event.append("UNSUBSCRIBE ", arg.flag);
        const res = await fetchWithBQ(`/api/events/subscription/`);
        if (res?.data?.data) {
          if (res.data?.TYPE === "ERROR") {
            return { data: null };
          }
          return { data: res?.data };
        }
        return {
          data: null,
        };
      },
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useLazyCreateEventQuery,
  useGetPartnerEventsQuery,
  useGetUserEventsQuery,
} = eventsApi;
