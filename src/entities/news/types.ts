export type TNews = {
  id: number;
  imageUrl: string;
  title: string;
  imageAdditionalUrl: string;
  body: string;
  shortText: string;
  createdAt: string;
};

export type TSortType = "OLD" | "WITHOUT_SORT" | "NEW";
