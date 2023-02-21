export const parseHTML = (text) => {
  const parseLt = text && text.replace(/&lt;/ig, "<")
  const parseRt = parseLt && parseLt.replace(/&gt;/ig, ">")

  return parseRt;
}