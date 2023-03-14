export const userResponseTransform = (res) => {
  if (res) {
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
      group: res["UF_GROUP"],
      apiKey: res["UF_API_KEY"],
    };
  }
  return null;
};
