import { TNews, TSortType } from "@entities/news/types";
import { useMemo, useState } from "react";

export const useSortNews = (displayedNews: TNews[]) => {
  const [sortType, setSortType] = useState<TSortType>("WITHOUT_SORT");

  const newsSort = useMemo(() => {
    switch (sortType) {
      case "WITHOUT_SORT":
        return displayedNews;
      case "NEW": {
        const arr = [...displayedNews];
        arr.sort(
          (item1, item2) =>
            Date.parse(item2.createdAt) - Date.parse(item1.createdAt)
        );
        return arr;
      }
      case "OLD": {
        const arr = [...displayedNews];
        arr.sort(
          (item1, item2) =>
            Date.parse(item1.createdAt) - Date.parse(item2.createdAt)
        );
        return arr;
      }
      default:
        return displayedNews;
    }
  }, [displayedNews, sortType]);

  return { newsSort, sortType, setSortType };
};
