export const transformDate = (date) => {
  const newDate = new Date(date);
  const utcDate = new Date(
    Date.UTC(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDate(),
      newDate.getHours(),
      newDate.getMinutes()
    )
  );
  const updatedDate = utcDate.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return updatedDate;
};

export const transformNewsDate = (date) => {
  const [day, month, year] = date.split(".");

  return new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day))
  ).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const dataIsEmpty = (data) =>
  data && !!Object.keys(data).length ? true : false;

export const declension = (initialNum, text_forms) => {
  const n = Math.abs(initialNum) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return `${initialNum} ${text_forms[2]}`;
  }
  if (n1 > 1 && n1 < 5) {
    return `${initialNum} ${text_forms[1]}`;
  }
  if (n1 === 1) {
    return `${initialNum} ${text_forms[0]}`;
  }

  return `${initialNum} ${text_forms[2]}`;
};

export const objToFormData = (obj) =>
  Object.keys(obj).reduce((formData, el) => {
    formData.append(el, obj[el]);
    return formData;
  }, new FormData());
