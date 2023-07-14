import { NewsList, fetchNews, useNews } from "@entities/news";
import { styled } from "@shared/ui";
import { Header } from "@widgets/header";
import { useEffect } from "react";
import { SortPicker } from "./ui";
import { useSortNews } from "./hooks";
import { useAppDispatch } from "@app/store";
import { BackHandler } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

const Spiner = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.palette.text.primary,
}))``;

export const News = () => {
  const { news, errorMessage, loading, displayedNews, amountOfPages } =
    useNews();
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

  return (
    <Container>
      <Header />
      {loading ? (
        <Spiner size="large" />
      ) : (
        <>
          <SortPicker setValue={setSortType} value={sortType} />

          <NewsList
            news={newsSort}
            loading={loading}
            amountOfPages={amountOfPages}
          />
        </>
      )}
    </Container>
  );
};
