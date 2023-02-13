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
  if (news) {
    return Object.keys(news).map((item) => ({
      id: news[item]["Fields"]["ID"],
      title: news[item]["Fields"]["short"],
      date: news[item]["Fields"]["date"],
      fullNewsText: news[item]["Fields"]["bigText"],
      img: news[item]["Fields"]["image"],
    }));
  }
  return []
};
