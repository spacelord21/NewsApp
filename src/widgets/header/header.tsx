import { TRootStackParamList } from "@app/navigation/types";
import { useAppDispatch } from "@app/store";
import { logout } from "@entities/user";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PrimaryButton, Typography, styled } from "@shared/ui";
import { useSelector } from "react-redux";

const Container = styled.View`
  height: 80px;
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.Image`
  border-radius: 50px;
  width: 70px;
  height: 70px;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type Navigation = NativeStackNavigationProp<TRootStackParamList, "mainStack">;

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<Navigation>();
  const { avatar_url, username } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("authStack");
  };

  return (
    <Container>
      <Text variant="subtitle">{username}</Text>
      <Image source={{ uri: avatar_url }} />
      <Text onPress={handleLogout}>Выйти</Text>
    </Container>
  );
};
