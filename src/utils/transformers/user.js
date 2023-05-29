import { USER_GROUPS } from "../constants";
import { USER_GROUP_NUMBER, groupMap } from "../constants/person";

export const userResponseTransform = (res) => {
  if (res) {
    const userGroup = res[USER_GROUPS]?.reduce(
      (acc, el) => ({ ...acc, [el]: groupMap[el] }),
      {}
    );
    return {
      userId: res["ID"],
      avatar: res["PERSONAL_PHOTO"],
      initials: res["NAME"],
      email: res["EMAIL"],
      birthday: res["PERSONAL_BIRTHDAY"],
      typeOfActivity: res["UF_USER_TYPE"],
      institution: res["PERSONAL_PROFESSION"],
      phoneNumber: res["PERSONAL_PHONE"],
      nickName: res["UF_TELEGRAM"],
      login: res["LOGIN"],
      group: res[USER_GROUPS]
        ? Math.max(...res[USER_GROUPS])
        : USER_GROUP_NUMBER,
      userGroups: Math.max(...Object.keys(userGroup)),
      apiKey: res["UF_API_KEY"],
    };
  }
  return null;
};
