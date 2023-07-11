import { NewsList, useNews } from "@entities/news";
import { styled } from "@shared/ui";
import { Header } from "@widgets/header";

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

  return (
    <Container>
      <Header />
      <NewsList
        news={displayedNews}
        loading={loading}
        amountOfPages={amountOfPages}
      />
    </Container>
  );
};
