import { transformNewsDate } from "../helpers";

const datesTransformer = (dates) => {
  if (dates) {
    const [dateStart, dateEnd] = dates.map((item) => {
      const [day, month, year] = transformNewsDate(item).split(" ");
      return { day, month, year };
    });
    if (!dateEnd) {
      return transformNewsDate(dates[0]);
    }
    if (dateStart.month === dateEnd.month) {
      return `${dateStart.day} - ${dateEnd.day} ${dateStart.month}`;
    }
    if (dateStart.month !== dateEnd.month) {
      return `${dateStart.day} ${dateStart.month} - ${dateEnd.day} ${dateEnd.month}`;
    }
  }
  return null;
};

export const eventsTransformer = (events) => {
  const url = "https://mosmolodezh.ru";
  if (events.data) {
    return Object.keys(events.data).map((item) => {
      try {
        const event = {
          id: events.data[item]["Fields"]["ID"],
          slug: events.data[item]["Fields"]["CODE"],
          title: events.data[item]["Fields"]["NAME"],
          img: url + events.data[item]["Fields"]["PREVIEW_PICTURE"],
          hasImg: events.data[item]["Fields"]["PREVIEW_PICTURE"],
          detailImg: url + events.data[item]["Fields"]["DETAIL_PICTURE"],
          hasDetailImg: events.data[item]["Fields"]["DETAIL_PICTURE"],
          dateStart: events.data[item]["Props"]["DATE_START"]["VALUE"]
            ? datesTransformer(
                events.data[item]["Props"]["DATE_START"]["VALUE"]
              )
            : "",
          org: events.data[item]["Props"]["ORGANIZATION"]["VALUE_DETAIL"],
          orgLogo:
            url +
            events.data[item]["Props"]["ORGANIZATION"]["VALUE_DETAIL_PIC"],
          slidersImage: events.data[item]["Props"]["SLIDER"]["VALUE"]
            ? events.data[item]["Props"]["SLIDER"]["VALUE"].map(
                (item) => url + item
              )
            : false,
          place: events.data[item]["Props"]["ADDRESS"]["VALUE"] ?? "",
          html: events.data[item]["Fields"]["DETAIL_TEXT"],
        };
        return event;
      } catch (e) {
        console.log("e", e);
      }
    });
  }

  return [];
};
