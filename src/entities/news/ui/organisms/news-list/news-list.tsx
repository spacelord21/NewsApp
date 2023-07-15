import { TNews } from "@entities/news/types";
import { styled } from "@shared/ui";
import { Animated, FlatList, ListRenderItem } from "react-native";
import { NewsItem } from "../../molecules";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@app/store";
import { fetchMoreNews, fetchNews } from "@entities/news/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TMainStackParamList } from "@app/navigation/types";
import { useNavigation } from "@react-navigation/native";

const List = styled(FlatList<TNews>)`
  flex-grow: 1;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  margin-left: ${({ theme }) => theme.spacing(1.5)}px;
`;

const Spiner = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.palette.text.tertiary,
}))`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

const Container = styled.View`
  flex: 1;
`;

type TNewsListProps = {
  news: TNews[];
  loading: boolean;
  amountOfPages: number;
};

type Navigation = NativeStackNavigationProp<TMainStackParamList, "news">;
const DEFAULT_PAGE_NUMBER = 2;

const AnimatedList = Animated.createAnimatedComponent(List);

export const NewsList = ({ news, loading, amountOfPages }: TNewsListProps) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<Navigation>();
  const renderItem: ListRenderItem<TNews> = ({ item, index }) => {
    return (
      <NewsItem
        index={index}
        scrollY={scrollY}
        news={item}
        key={item.id}
        onPress={() => navigation.navigate("newsItem", item)}
      />
    );
  };

  const dispatch = useAppDispatch();
  // изначально с page = 2, т.к с api предназначенным под inf scroll первый фетч был бы ?page=1
  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
  const shouldFetchMoreData = loading || page > amountOfPages;

  useEffect(() => {
    return () => setPage(DEFAULT_PAGE_NUMBER);
  }, []);

  const onEndReachedHandler = async () => {
    if (shouldFetchMoreData) return;
    await dispatch(fetchMoreNews(page));
    setPage((prev) => prev + 1);
  };

  const onResfreshHandler = () => {
    dispatch(fetchNews());
    setPage(DEFAULT_PAGE_NUMBER);
  };

  return (
    <Container>
      <AnimatedList
        testID="news-list"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        onRefresh={onResfreshHandler}
        refreshing={loading && !shouldFetchMoreData}
        onEndReached={onEndReachedHandler}
        data={news}
        renderItem={renderItem}
        contentContainerStyle={{
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
        }}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          loading ? <Spiner size={"large"} testID="spinner" /> : null
        }
      />
    </Container>
  );
};
