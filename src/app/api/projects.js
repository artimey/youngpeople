import { baseApi } from ".";
import { projectsResponseTransform } from "../../utils/transformers/projects";

export const projectsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProjects: build.query({
      query: () => ({ url: "api/projects/", method: "GET" }),
      transformResponse(res) {
        console.log('REST',res);
        console.log("DATA", projectsResponseTransform(res.data));
        return projectsResponseTransform(res.data);
      },
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectsApi;
