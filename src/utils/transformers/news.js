import { FIELD_NAME } from "../constants/forms";

export const getNewsRows = (arr, pageNUmber) => {
  const firstRow = [];
  const secondRow = [];
  const thirdRow = [];
  arr.forEach((item, idx) => {
    if (pageNUmber === 1) {
      if (idx >= 0 && idx <= 3) {
        firstRow.push(item);
      } else if (idx >= 4 && idx <= 8) {
        secondRow.push(item);
      } else {
        thirdRow.push(item);
      }
    } else {
      if (idx >= 0 && idx <= 4) {
        firstRow.push(item);
      } else if (idx >= 5 && idx <= 8) {
        secondRow.push(item);
      } else {
        thirdRow.push(item);
      }
    }
  });

  return [firstRow, secondRow, thirdRow];
};


export const newsTransformer = (news) => {
  const url = "https://mosmolodezh.ru";

  if (news) {
    console.log(news);
    console.log(Object.keys(news))
    return Object.keys(news).map((item) => ({
      id: news[item][FIELD_NAME]["ID"],
      title: news[item][FIELD_NAME]["NAME"],
      slug: news[item][FIELD_NAME]["CODE"],
      date: news[item][FIELD_NAME]["DATE_ACTIVE_FROM"],
      fullNewsText: news[item][FIELD_NAME]["DETAIL_TEXT"],
      img: url + news[item][FIELD_NAME]["DETAIL_PICTURE"],
    }));
  }
  return [];
};
