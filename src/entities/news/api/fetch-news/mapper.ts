import { TNews } from "@entities/news/types";
import { TNewsModel } from "./fetch-news";

export const mappedData = (data: TNewsModel[]): TNews[] => {
  return data.map((item) => ({
    body: item.body,
    createdAt: item.created_at,
    id: item.id,
    imageAdditionalUrl: item.image_additional_url,
    imageUrl: item.image_url,
    shortText: item.short_text,
    title: item.title,
  }));
};
