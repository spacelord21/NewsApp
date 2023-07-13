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

export const isEqual = <T>(obj1: T, obj2: T) => {
  var props1 = Object.getOwnPropertyNames(obj1);
  var props2 = Object.getOwnPropertyNames(obj2);
  if (props1.length != props2.length) {
    return false;
  }
  for (var i = 0; i < props1.length; i++) {
    let val1 = obj1[props1[i]];
    let val2 = obj2[props1[i]];
    let isObjects = isObject(val1) && isObject(val2);
    if ((isObjects && !isEqual(val1, val2)) || (!isObjects && val1 !== val2)) {
      return false;
    }
  }
  return true;
};
export const isObject = <T>(object: T) => {
  return object != null && typeof object === "object";
};
