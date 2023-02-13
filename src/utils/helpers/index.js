export const transformDate = (date) => {
  if (Date.parse(date)) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
  return date.split(" ")[0];
};
