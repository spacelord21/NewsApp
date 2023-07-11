import { TNews } from "@entities/news/types";
import { PrimaryButton, Typography, styled } from "@shared/ui";
import { NewsPicture } from "../../atoms";

const Container = styled.TouchableWithoutFeedback`
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(Typography).attrs({})`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: left;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(2)}px;
  left: ${({ theme }) => theme.spacing(2)}px;
  letter-spacing: 2px;
  width: 90%;
`;

const DescriptionWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

const ImageWrapper = styled.View`
  position: relative;
  border-radius: 20px;
  width: 95%;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

type TNewsItemProps = {
  news: TNews;
  onPress: () => void;
};

export const NewsItem = ({ news, onPress }: TNewsItemProps) => {
  const { imageUrl, title } = news;
  return (
    <Container onPress={onPress}>
      <ImageWrapper
        style={{
          shadowColor: "rgb(0, 0, 0)",
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 6,
          backgroundColor: "white",
        }}
      >
        <NewsPicture imageUrl={imageUrl} />
        <Title
          variant="newsTitle"
          style={{
            textShadowColor: "black",
            textShadowOffset: { height: 1, width: 1 },
            textShadowRadius: 10,
          }}
        >
          {title}
        </Title>
      </ImageWrapper>
    </Container>
  );
};
