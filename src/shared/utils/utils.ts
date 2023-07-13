export const getLink = (str: string): string | undefined => {
  const regex = /<a\s+href="(.*?)"/;
  const match = str.match(regex);
  if (match) {
    return match[1].toString();
  }
};

export const removeHTMLTagsFromString = (str: string): string => {
  return str.replace(/(\<(\/?[^>]+)>)/g, "");
};

export const parseDate = (str: string): string => {
  return new Date(Date.parse(str)).toLocaleDateString("ru-RU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
