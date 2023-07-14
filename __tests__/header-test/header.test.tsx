import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Header } from "../../src/widgets";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { NavigationContainer } from "@react-navigation/native";
import { logout, useUser } from "../../src/entities/user/model/user";
import { theme } from "../../src/shared/ui/theme/theme";
import { ThemeProvider } from "styled-components/native";
import { useAppDispatch } from "../../src/app/store";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
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
  logout: jest.fn(),
}));

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Header component", () => {
  const mockUser = {
    avatar_url: "https://some.ru",
    username: "John Doe",
  };
  const store = mockStore({});

  it("информация о пользователе и автарка рендерятся корректно", () => {
    (useUser as jest.Mock).mockReturnValue(mockUser);
    const component = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <Header />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    );

    expect(component.getByText("John Doe")).toBeTruthy();
    expect(component.getAllByTestId("avatar_comp")).toBeDefined();
    expect(component).toMatchSnapshot();
  });
  it("аватарки нет, если avatar_url пустой", () => {
    const mockUser = {
      avatar_url: "",
      username: "John Doe",
    };
    (useUser as jest.Mock).mockReturnValue(mockUser);
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <Header />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    );
    expect(queryByTestId("avatar_comp")).toBeNull();
  });
  it("вызов navigation.navigate and dispatch on logout", () => {
    (useUser as jest.Mock).mockReturnValue(mockUser);
    const mockDispatch = jest.fn();
    const mockNavigation = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigation,
    });
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <Header />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    );

    fireEvent.press(getByText("Выйти"));
    expect(mockNavigation).toHaveBeenCalledWith("authStack");
    expect(mockDispatch).toHaveBeenCalledWith(logout());
  });
});
