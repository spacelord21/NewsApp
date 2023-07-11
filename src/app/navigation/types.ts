import { TNews } from "@entities/news/types";

export type TAuthStackParamList = {
  auth: undefined;
};

export type TMainStackParamList = {
  news: undefined;
  newsItem: TNews;
};

export type TRootStackParamList = {
  authStack: undefined;
  mainStack: undefined;
};
