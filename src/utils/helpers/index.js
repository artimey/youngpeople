export const transformDate = (date) => {
  if (Date.parse(date)) {
    const newDate = new Date(date);

    return newDate.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
  return date;
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
