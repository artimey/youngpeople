import { FIELD_NAME, INSTITUT_NAME } from "../constants/forms";

export const institutionsTransformer = (institutions) => {
  if (institutions) {
    return Object.keys(institutions).map((item) => ({
      value: institutions[item][FIELD_NAME][INSTITUT_NAME],
      label: institutions[item][FIELD_NAME][INSTITUT_NAME],
    }));
  }
  return []
};
