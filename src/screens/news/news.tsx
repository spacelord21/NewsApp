import { NewsList, fetchNews, useNews } from "@entities/news";
import { Typography, styled } from "@shared/ui";
import { Header } from "@widgets/header";
import { useEffect } from "react";
import { SortPicker } from "./ui";
import { useSortNews } from "./hooks";
import { useAppDispatch } from "@app/store";
import { BackHandler } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

export const News = () => {
  const { errorMessage, loading, displayedNews, amountOfPages } = useNews();
  const { newsSort, setSortType, sortType } = useSortNews(displayedNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  if (errorMessage) {
    return (
      <Container>
        <Header />
        <ErrorText variant="title">{errorMessage}</ErrorText>
      </Container>
    );
  }

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
