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

const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.palette.text.primary};
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

type TNewsListProps = {
  news: TNews[];
};

export const NewsList = ({ news }: TNewsListProps) => {
  const renderItem: ListRenderItem<TNews> = ({ item }) => {
    return <NewsItem news={item} key={item.id} />;
  };

  return (
    <Container>
      <List
        // ItemSeparatorComponent={Separator}
        data={news}
        renderItem={renderItem}
        contentContainerStyle={{
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
          elevation: 20,
          shadowColor: "red",
        }}
      />
    </Container>
  );
};
