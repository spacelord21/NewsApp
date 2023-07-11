import { TMainStackParamList } from "@app/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styled } from "@shared/ui";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

type Props = NativeStackScreenProps<TMainStackParamList, "newsItem">;

export const NewsItem = ({ route }: Props) => {
  return <Container></Container>;
};
