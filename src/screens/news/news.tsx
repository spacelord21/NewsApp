import { NewsList, fetchNews, useNews } from "@entities/news";
import { TSortType } from "@entities/news/types";
import { styled } from "@shared/ui";
import { parseDate } from "@shared/utils";
import { Header } from "@widgets/header";
import { useEffect, useMemo, useState } from "react";
import { SortPicker } from "./ui";
import { useSortNews } from "./hooks";
import { useAppDispatch } from "@app/store";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
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
