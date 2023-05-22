import { FIELD_NAME, NAME } from "../constants/forms";

export const institutionsTransformer = (institutions) => {
  if (institutions) {
    return Object.keys(institutions).map((item) => ({
      value: institutions[item][FIELD_NAME][NAME]?.replace(/&quot;/gim, ""),
      label: institutions[item][FIELD_NAME][NAME]?.replace(/&quot;/gim, ""),
    }));
  }
  return [];
};
