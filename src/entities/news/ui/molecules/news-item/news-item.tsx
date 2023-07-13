import { TNews } from "@entities/news/types";
import { Typography, styled } from "@shared/ui";
import { NewsPicture } from "../../atoms";
import { StyleSheet } from "react-native";

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
  font-weight: bold;
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
      <ImageWrapper style={styles.imageWrapper}>
        <NewsPicture imageUrl={imageUrl} />
        <Title variant="newsTitle" style={styles.title}>
          {title}
        </Title>
      </ImageWrapper>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    backgroundColor: "white",
  },
  title: {
    textShadowColor: "black",
    textShadowOffset: { height: 1, width: 1 },
    textShadowRadius: 10,
  },
});
