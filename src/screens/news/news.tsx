import { NewsList, useNews } from "@entities/news";
import { Typography, styled } from "@shared/ui";
import { Header } from "@widgets/header";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const News = () => {
  const news = useNews();
  return (
    <Container>
      <Header />
      <NewsList news={news} />
    </Container>
  );
};
