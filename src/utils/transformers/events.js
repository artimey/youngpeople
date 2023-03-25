import { transformNewsDate } from "../helpers";

const datesTransformer = (dates) => {
  const mounthEvent = (array, mounth) =>
    array.every((item) => item.includes(mounth));
  const fullYearEvent = (array, year) =>
    array.every((item) => item.includes(year));
  if (dates) {
    const d = dates.map((item) => {
      return transformNewsDate(item);
    });
    const [date, mounth, year] = d[0].split(" ");
    if (fullYearEvent(d, year)) {
      if (mounthEvent(d, mounth)) {
        return `${date} - ${d[1].split(" ")[0]} ${mounth}`;
      }
      return d.map((item) => item.split(" ").slice(0, 2).join(" ")).join(" - ");
    }
    return d.join(" - ");
  }
  return null;
};

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
      dateStart: datesTransformer(
        events.data[item]["Props"]["DATE_START"]["VALUE"]
      ),
      org: events.data[item]["Props"]["ORGANIZATION"]["VALUE_DETAIL"],
      orgLogo:
        url + events.data[item]["Props"]["ORGANIZATION"]["VALUE_DETAIL_PIC"],
      slidersImage: events.data[item]["Props"]["SLIDER"]["VALUE"]
        ? events.data[item]["Props"]["SLIDER"]["VALUE"].map(
            (item) => url + item
          )
        : false,
      place: events.data[item]["Props"]["ADDRESS"]["VALUE"] ?? '',
      html: events.data[item]["Fields"]["DETAIL_TEXT"],
    }));
  }

  return [];
};
