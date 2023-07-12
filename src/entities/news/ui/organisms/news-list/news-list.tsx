import { TNews } from "@entities/news/types";
import { styled } from "@shared/ui";
import { ActivityIndicator, FlatList, ListRenderItem } from "react-native";
import { NewsItem } from "../../molecules";
import { useState } from "react";
import { useAppDispatch } from "@app/store";
import { fetchMoreNews } from "@entities/news/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TMainStackParamList } from "@app/navigation/types";
import { useNavigation } from "@react-navigation/native";

const List = styled(FlatList<TNews>)`
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
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

export const NewsList = ({ news, loading, amountOfPages }: TNewsListProps) => {
  const navigation = useNavigation<Navigation>();
  const renderItem: ListRenderItem<TNews> = ({ item }) => {
    return (
      <NewsItem
        news={item}
        key={item.id}
        onPress={() => navigation.navigate("newsItem", item)}
      />
    );
  };
  const dispatch = useAppDispatch();
  // изначально с page = 2, т.к с api предназначенным под inf scroll первый фетч был бы ?page=1
  const [page, setPage] = useState(2);
  const onEndReachedHandler = () => {
    if (loading || page > amountOfPages) return;
    dispatch(fetchMoreNews(page)).then(() => {
      setPage((prev) => prev + 1);
    });
  };

  return (
    <Container>
      <List
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
          loading ? <ActivityIndicator size={"large"} /> : null
        }
      />
    </Container>
  );
};
