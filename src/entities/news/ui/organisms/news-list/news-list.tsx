import { TNews } from "@entities/news/types";
import { styled } from "@shared/ui";
import { FlatList, ListRenderItem } from "react-native";
import { NewsItem } from "../../molecules";

const List = styled(FlatList<TNews>)`
  flex-grow: 1;
`;

const Container = styled.View`
  flex: 1;
`;

type TNewsListProps = {
  news: TNews[];
};

export const NewsList = ({ news }: TNewsListProps) => {
  const renderItem: ListRenderItem<TNews> = ({ item }) => {
    return <NewsItem {...item} key={item.id} />;
  };

  return (
    <List data={news} renderItem={renderItem} contentContainerStyle={{}} />
  );
};
