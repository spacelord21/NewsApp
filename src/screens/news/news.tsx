import { useAppDispatch } from "@app/store";
import { NewsList, useNews } from "@entities/news";
import { fetchNews } from "@entities/news/api";
import { Typography, styled } from "@shared/ui";
import { Header } from "@widgets/header";
import { useEffect, useState } from "react";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const News = () => {
  const { news: fetchingNews, errorMessage, loading } = useNews();
  const [news, setNews] = useState<typeof fetchingNews>([]);
  useEffect(() => {
    console.log(fetchingNews);

    setNews(fetchingNews);
  }, [fetchingNews]);

  return (
    <Container>
      <Header />
      <NewsList news={news} />
    </Container>
  );
};
