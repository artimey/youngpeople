import { baseApi } from ".";
import { userResponseTransform } from "../../utils/transformers/user";
import { setUser } from "../store/slices/user";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    auth: build.query({
      async queryFn(arg, queryApi, _extraOptions, fetchWithBQ) {
        const auth = new FormData();
        auth.append("METHOD", "AUTH");
        auth.append("LOGIN", arg.email);
        auth.append("PASS", arg.password);
        const res = await fetchWithBQ({
          url: "/api/personal/",
          method: "POST",
          body: auth,
        });
        if (res?.data) {
          if (res.data?.TYPE === "ERROR") {
            return { data: res.data["MESSAGE"] };
          }
          queryApi.dispatch(setUser(userResponseTransform(res.data)));
          return { data: userResponseTransform(res.data) };
        }
        return {
          data: null,
        };
      },
    }),
    userRegistration: build.query({
      async queryFn(arg, queryApi, _extraOptions, fetchWithBQ) {
        const auth = new FormData();
        auth.append("METHOD", "REGISTRATOIN");
        auth.append("FIO", arg.initials);
        auth.append("EMAIL", arg.email);
        auth.append("PASS", arg.password);
        const res = await fetchWithBQ({
          url: "/api/personal/",
          method: "POST",
          body: auth,
        });
        if (res?.data) {
          if (res.data?.TYPE === "ERROR") {
            return { data: res.data["MESSAGE"] };
          } else if (res.data["USER_INFO"]) {
            queryApi.dispatch(
              setUser({
                userId: res?.data["USER_INFO"]["ID"],
                apiKey: res?.data["USER_INFO"]["UF_API_KEY"],
              })
            );
            return { data: userResponseTransform(res.data) };
          }
        }
        return {
          data: null,
        };
      },
    }),
    userUpdate: build.query({
      async queryFn(arg, queryApi, _extraOptions, fetchWithBQ) {
        const auth = new FormData();
        // console.log("arg", arg);
        auth.append("METHOD", "UPDATE");
        if (arg.initials) auth.append("FIO", arg.initials);
        if (arg.email) auth.append("EMAIL", arg.email);
        if (arg.password) auth.append("PASS", arg.password);
        if (arg.phoneNumber) auth.append("PERSONAL_PHONE", arg.phoneNumber);
        if (arg.nickName) auth.append("UF_TELEGRAM ", arg.nickName);
        if (arg.typeOfActivity)
          auth.append("UF_USER_TYPE ", arg.typeOfActivity);
        if (arg.birthday) auth.append("PERSONAL_BIRTHDAY", arg.birthday);
        if (arg.apiKey) auth.append("UF_API_KEY", arg.apiKey);
        if (arg.userId) auth.append("USER_ID", arg.userId);
        const res = await fetchWithBQ({
          url: "/api/personal/",
          method: "POST",
          body: auth,
        });
        if (res?.data) {
          if (res.data?.TYPE === "ERROR") {
            return { data: res.data["MESSAGE"] };
          }
          // console.log('res?.data["USER_INFO"]["UF_API_KEY"]', res?.data);
          queryApi.dispatch(setUser(userResponseTransform(res?.data)));
          return { data: userResponseTransform(res?.data) };
        }
        return {
          data: null,
        };
      },
    }),
    restorePasswordEmail: build.query({
      async queryFn(arg, queryApi, _extraOptions, fetchWithBQ) {
        const auth = new FormData();
        // console.log("arg", arg);
        auth.append("METHOD", "SEND_RESTORE_PASSWORD");
        auth.append("EMAIL", arg.email);
        const res = await fetchWithBQ({
          url: "/api/personal/",
          method: "POST",
          body: auth,
        });
        if (res?.data) {
          if (res.data?.TYPE === "ERROR") {
            return { data: res.data["MESSAGE"] };
          }
          // console.log("RES", res?.data);

          return { data: userResponseTransform(res?.data) };
        }
        return {
          data: null,
        };
      },
    }),
    restorePassword: build.query({
      async queryFn(arg, queryApi, _extraOptions, fetchWithBQ) {
        const auth = new FormData();
        // console.log("arg", arg);
        auth.append("METHOD", "RESTORE_PASSWORD");
        auth.append("EMAIL", arg.email);
        auth.append("CODE", arg.code);
        auth.append("PASSWORD", arg.password);
        const res = await fetchWithBQ({
          url: "/api/personal/",
          method: "POST",
          body: auth,
        });
        if (res?.data) {
          if (res.data?.TYPE === "ERROR") {
            return { data: res.data["MESSAGE"] };
          }
          // console.log("RES", res?.data);

          return { data: userResponseTransform(res?.data) };
        }
        return {
          data: null,
        };
      },
    }),
  }),
});

export const {
  useLazyAuthQuery,
  useLazyUserRegistrationQuery,
  useLazyUserUpdateQuery,
  useLazyRestorePasswordEmailQuery,
  useLazyRestorePasswordQuery
} = authApi;
