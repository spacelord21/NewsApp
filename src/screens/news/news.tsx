import { NewsList, useNews } from "@entities/news";
import { TSortType } from "@entities/news/types";
import { styled } from "@shared/ui";
import { parseDate } from "@shared/utils";
import { Header } from "@widgets/header";
import { useMemo, useState } from "react";
import { SortPicker } from "./ui";
import { useSortNews } from "./hooks";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const News = () => {
  const { news, errorMessage, loading, displayedNews, amountOfPages } =
    useNews();
  const { newsSort, setSortType, sortType } = useSortNews(displayedNews);
  return (
    <Container>
      <Header />
      <SortPicker setValue={setSortType} value={sortType} />
      <NewsList
        news={newsSort}
        loading={loading}
        amountOfPages={amountOfPages}
      />
    </Container>
  );
};
