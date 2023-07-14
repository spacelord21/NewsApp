import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Authorization } from "../../src/screens/auth";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { NavigationContainer } from "@react-navigation/native";
import { useUser, TUserSlice } from "../../src/entities/user/model/user";
import { theme } from "../../src/shared/ui/theme/theme";
import { ThemeProvider } from "styled-components/native";
import { useTheme } from "styled-components";
import { useAppDispatch } from "../../src/app/store";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

jest.mock("styled-components", () => ({
  ...jest.requireActual("styled-components"),
  useTheme: jest.fn(),
}));

jest.mock("../../src/app/store", () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

jest.mock("../../src/entities/user/model/user", () => ({
  useUser: jest.fn(),
}));

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Auth component", () => {
  const initialState: TUserSlice = {
    avatar_url: "",
    errorMessage: "",
    id: 0,
    loading: false,
    tokens: {
      accessToken: "",
      client: "",
      uid: "",
    },
    username: "",
  };
  const store = mockStore({
    user: initialState,
  });
  (useTheme as jest.Mock).mockReturnValue(theme);

  it("корректное изменение инпутов и наличие кнопки", () => {
    (useUser as jest.Mock).mockReturnValue(initialState);

    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <Authorization />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    );
    const emailInput = getByPlaceholderText("Почта");
    const passwordInput = getByPlaceholderText("Пароль");
    const buttonText = getByText("Авторизоваться");

    fireEvent.changeText(emailInput, "someemail@mail.ru");
    fireEvent.changeText(passwordInput, "1234");
    expect(emailInput.props.value).toBe("someemail@mail.ru");
    expect(passwordInput.props.value).toBe("1234");
    expect(buttonText).toBeTruthy();
  });
  it("отображение ошибки", () => {
    (useUser as jest.Mock).mockReturnValue({
      ...initialState,
      errorMessage: "Ошибка",
    });
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <Authorization />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    );
    expect(getByText("Ошибка")).toBeTruthy();
  });
  it("отображение индикатора загрузки при запросе", () => {
    (useUser as jest.Mock).mockReturnValue({
      ...initialState,
      loading: true,
    });
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <Authorization />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    );
    expect(queryByTestId("indicator")).toBeDefined();
  });
  it("корректная отработка authHandler", () => {
    (useUser as jest.Mock).mockReturnValue(initialState);
    const mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <Authorization />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    );
    const emailInput = getByPlaceholderText("Почта");
    const passwordInput = getByPlaceholderText("Пароль");
    fireEvent.changeText(emailInput, "someemail@mail.ru");
    fireEvent.changeText(passwordInput, "1234");
    fireEvent.press(getByText("Авторизоваться"));

    expect(mockDispatch).toHaveBeenCalled();
  });
});
