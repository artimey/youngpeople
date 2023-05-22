import { BASE_URL } from "../constants";
import { FIELD_NAME, PROPS_NAME } from "../constants/forms";

export const projectsResponseTransform = (data) => {
  if (data && !!Object.keys(data).length) {
    return Object.keys(data).reduce(
      (acc, el) => ({
        ...acc,
        [el]: {
          id: data[el][FIELD_NAME]["ID"],
          title: data[el][FIELD_NAME]["NAME"],
          img: data[el][FIELD_NAME]["PREVIEW_PICTURE"]
            ? `${BASE_URL}${data[el][FIELD_NAME]["PREVIEW_PICTURE"]}`
            : "",
          previewText: data[el][FIELD_NAME]["PREVIEW_TEXT"],
          slug: data[el][FIELD_NAME]["CODE"],
          logo: data[el][PROPS_NAME]["LOGO"],
          text1: data[el][PROPS_NAME]["TEXT_1"],
          text2: data[el][PROPS_NAME]["TEXT_2"],
          slider: data[el][PROPS_NAME]["SLIDER"],
          linkSite: data[el][PROPS_NAME]["LINK_SITE"]["VALUE"] || null,
          vkLink: data[el][PROPS_NAME]["LINK_VK"]["VALUE"] || null,
          tgLink: data[el][PROPS_NAME]["LINK_TELEGRAM"]["VALUE"] || null,
        },
      }),
      {}
    );
  }
  return {};
};
