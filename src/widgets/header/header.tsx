import { TRootStackParamList } from "@app/navigation/types";
import { useAppDispatch } from "@app/store";
import { logout, useUser } from "@entities/user";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Typography, styled } from "@shared/ui";

const Container = styled.View`
  height: 90px;
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.Image`
  border-radius: 50px;
  width: 70px;
  height: 70px;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

type Navigation = NativeStackNavigationProp<TRootStackParamList, "mainStack">;

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<Navigation>();
  const { avatar_url, username } = useUser();
  const handleLogout = () => {
    navigation.navigate("authStack");
    dispatch(logout());
  };

  return (
    <Container>
      <Text variant="subtitle">{username}</Text>
      {avatar_url && (
        <Image source={{ uri: avatar_url }} testID="avatar_comp" />
      )}
      <Text onPress={handleLogout}>Выйти</Text>
    </Container>
  );
};
