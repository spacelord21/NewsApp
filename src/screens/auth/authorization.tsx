import { Input, PrimaryButton, Typography, styled } from "@shared/ui";
import { useAuth } from "./hooks";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.palette.accent["color-danger-500"]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

export const Authorization = () => {
  const {
    authHandler,
    password,
    setPassword,
    email,
    setEmail,
    errorMessage,
    loading,
  } = useAuth();
  const theme = useTheme();

  return (
    <Container>
      {errorMessage && <ErrorText variant="subtitle">{errorMessage}</ErrorText>}
      <Input
        onChange={setEmail}
        value={email}
        placeholder="Почта"
        key="email"
      />
      <Input
        onChange={setPassword}
        value={password}
        placeholder="Пароль"
        key="password"
        type="password"
        isPassword={true}
      />
      <PrimaryButton
        onPress={authHandler}
        disabled={Boolean(!email && !password)}
      >
        {loading ? (
          <ActivityIndicator
            size={"small"}
            color={theme.palette.accent["color-primary-600"]}
          />
        ) : (
          "Авторизоваться"
        )}
      </PrimaryButton>
    </Container>
  );
};
