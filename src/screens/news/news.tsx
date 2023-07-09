import {NewsList, useNews} from '@entities/news';
import {Typography, styled} from '@shared/ui';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const News = () => {
  const news = useNews();
  return (
    <Container>
      <NewsList news={news} />
      <Typography>some</Typography>
    </Container>
  );
};
