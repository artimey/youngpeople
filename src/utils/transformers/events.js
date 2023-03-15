export const eventsTransformer = (events) => {
  const url = "https://mosmolodezh.ru";

  if (events) {
    console.log(events);
    return Object.keys(events).map((item) => ({
      id: events[item]["Fields"]["ID"],
      slug: events[item]["Fields"]["CODE"],
      title: events[item]["Fields"]["NAME"],
      img: url + events[item]["Fields"]["PREVIEW_PICTURE"],
      hasImg: events[item]["Fields"]["PREVIEW_PICTURE"],
      dateStart: events[item]["Props"]["DATE_START"]["TIMESTAMP_X"],
      org: events[item]["Props"]["ORGANIZATION"]["NAME"],
      place: "Холодильный пер., 3, корп. 1, стр. 8, Москва",
      html: events[item]["Fields"]["DETAIL_TEXT"],
    }));
  }

  return [];
};
