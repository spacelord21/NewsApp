import { TNews } from "@entities/news/types";
import { Typography, styled } from "@shared/ui";
import { NewsPicture } from "../../atoms";
import { Animated, StyleSheet } from "react-native";

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
  index: number;
  scrollY: Animated.Value;
};
const ITEM_SIZE = 290;
export const NewsItem = ({ news, onPress, index, scrollY }: TNewsItemProps) => {
  const { imageUrl, title } = news;
  const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];
  const opacityRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 0.5)];
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });
  const opacity = scrollY.interpolate({
    inputRange: opacityRange,
    outputRange: [1, 1, 1, 0],
  });
  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: scale,
          },
        ],
        opacity,
      }}
    >
      <Container onPress={onPress}>
        <ImageWrapper style={styles.imageWrapper}>
          <NewsPicture imageUrl={imageUrl} />
          <Title variant="newsTitle" style={styles.title}>
            {title}
          </Title>
        </ImageWrapper>
      </Container>
    </Animated.View>
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
