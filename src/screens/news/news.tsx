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
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const News = () => {
  const { news, errorMessage, loading } = useNews();

  return (
    <Container>
      <Header />
      <NewsList news={news} />
    </Container>
  );
};
