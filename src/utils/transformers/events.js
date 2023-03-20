export const eventsTransformer = (events) => {
  const url = "https://mosmolodezh.ru";

  if (events.data) {
    return Object.keys(events.data).map((item) => ({
      id: events.data[item]["Fields"]["ID"],
      slug: events.data[item]["Fields"]["CODE"],
      title: events.data[item]["Fields"]["NAME"],
      img: url + events.data[item]["Fields"]["PREVIEW_PICTURE"],
      hasImg: events.data[item]["Fields"]["PREVIEW_PICTURE"],
      detailImg: url + events.data[item]["Fields"]["DETAIL_PICTURE"],
      hasDetailImg: events.data[item]["Fields"]["DETAIL_PICTURE"],
      dateStart: events.data[item]["Props"]["DATE_START"]["TIMESTAMP_X"],
      org: events.data[item]["Props"]["ORGANIZATION"]["VALUE_DETAIL"],
      orgLogo: url + events.data[item]["Props"]["ORGANIZATION"]["VALUE_DETAIL_PIC"],
      place: "Холодильный пер., 3, корп. 1, стр. 8, Москва",
      html: events.data[item]["Fields"]["DETAIL_TEXT"],
    }));
  }

  return [];
};
