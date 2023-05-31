import { baseApi } from ".";
import { tasksTransformer } from "../../utils/transformers/tasks";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query({
      async queryFn(arg, queryApi, _, fetchWithBQ) {
        const state = queryApi.getState();

        const tasks = await fetchWithBQ({
          url: `/api/assistant/?LINK_USER=${state.person?.userId}`,
          method: "GET",
        });
        const events = [];
        if (tasks?.data) {
          const taskData = Object.values(tasks?.data ?? []);
          for (let i = 0; i < taskData.length; i++) {
            const taskEvent = taskData[i]?.["Props"]?.["LINK_EVENT"]?.["VALUE"];
            const eventFetch = await fetchWithBQ(
              `/api/events/?id=${taskEvent}`
            );
            if (eventFetch?.data?.data) {
              const event = eventFetch?.data?.data?.[0]?.["Fields"];
              events.push({ id: event?.["ID"], name: event?.["NAME"] });
            }
          }
          const transformEvents = events.reduce(
            (acc, el) => ({ ...acc, [el.id]: el }),
            {}
          );
          const groupTasks = tasksTransformer(tasks?.data);
          // const transformTasks = Object.keys(groupTasks).map((item) => {
          //   return groupTasks[item].map((t) => ({
          //     ...t,
          //     eventName: transformEvents[item].name,
          //   }));
          // });
          const transformTasks = Object.keys(groupTasks).reduce((acc, el) => {
            return {
              ...acc,
              [el]: groupTasks[el].map((item) => ({
                ...item,
                eventName: transformEvents[el].name,
              })),
            };
          }, {});
          return { data: { tasks: transformTasks, events: transformEvents } };
        }
        return { data: { tasks: null, events: null } };
      },
      providesTags: ["TASKS"],
    }),
    updateTaskStatus: build.mutation({
      async queryFn(arg, queryApi, _, fetchWithBQ) {
        const state = queryApi.getState();
        const formData = new FormData();
        formData.append("TASK", arg.taskId);
        formData.append("USER_ID ", state.person?.userId);
        formData.append("UNSUBSCRIBE ", "y");
        const event = await fetchWithBQ({
          url: `api/assistant/subscription/`,
          method: "POST",
          body: formData,
        });
      },
      invalidatesTags: ["TASKS"],
    }),
    getTasksCount: build.query({
      async queryFn(arg, queryApi, _, fetchWithBQ) {
        const state = queryApi.getState();

        const tasks = await fetchWithBQ({
          url: `/api/assistant/?LINK_USER=${arg}`,
          method: "GET",
        });
        const events = [];
        if (tasks?.data) {
          const taskData = Object.values(tasks?.data ?? []);
          for (let i = 0; i < taskData.length; i++) {
            const taskEvent = taskData[i]?.["Props"]?.["LINK_EVENT"]?.["VALUE"];
            const eventFetch = await fetchWithBQ(
              `/api/events/?id=${taskEvent}`
            );
            if (eventFetch?.data?.data) {
              const event = eventFetch?.data?.data?.[0]?.["Fields"];
              events.push({ id: event?.["ID"], name: event?.["NAME"] });
            }
          }
          const transformEvents = events.reduce(
            (acc, el) => ({ ...acc, [el.id]: el }),
            {}
          );
          const groupTasks = tasksTransformer(tasks?.data);
          // const transformTasks = Object.keys(groupTasks).map((item) => {
          //   return groupTasks[item].map((t) => ({
          //     ...t,
          //     eventName: transformEvents[item].name,
          //   }));
          // });
          const transformTasks = Object.keys(groupTasks).reduce((acc, el) => {
            return {
              ...acc,
              [el]: groupTasks[el].map((item) => ({
                ...item,
                eventName: transformEvents[el].name,
              })),
            };
          }, {});
          return {
            data: {
              tasks: Object.values(transformTasks).flat().length,
            },
          };
        }
        return { data: { tasks: null, events: null } };
      },
      providesTags: ["TASKS"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useUpdateTaskStatusMutation,
  useLazyGetTasksCountQuery,
} = tasksApi;
