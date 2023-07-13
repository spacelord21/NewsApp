import {TNews} from '@entities/news/types';
import {PrimaryButton, Typography, styled} from '@shared/ui';
import {NewsPicture} from '../../atoms';

const Container = styled.View`
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin-top: ${({theme}) => theme.spacing(3)}px;
`;

const Title = styled(Typography)`
  color: ${({theme}) => theme.palette.text.primary};
`;

type TNewsItemProps = TNews;

export const NewsItem = ({description, id, image, title}: TNewsItemProps) => {
  return (
    <Container>
      <NewsPicture imageUrl={image} />
      <Title variant="title">{title}</Title>
      <PrimaryButton onPress={() => {}}>К НОВОСТИ</PrimaryButton>
    </Container>
  );
};
