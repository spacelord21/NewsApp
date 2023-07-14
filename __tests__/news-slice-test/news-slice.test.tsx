import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NewsList } from "../../src/entities/news";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../../src/shared/ui/theme/theme";
import { ThemeProvider } from "styled-components/native";
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

describe("NewsList component", () => {
  it("корректный рендер", () => {
    const initialState = {
      news: [],
      loading: false,
      amountOfPages: 0,
    };
    const store = mockStore({ news: initialState });

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <NewsList {...initialState} />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    );
    expect(getByTestId("news-list")).toBeDefined();
  });

  it("вызов dispatch'a при рефреше", () => {
    const initialState = {
      news: [],
      loading: false,
      amountOfPages: 0,
    };
    const store = mockStore({ news: initialState });
    const mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <NewsList {...initialState} />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    );
    fireEvent(getByTestId("news-list"), "refresh");
    expect(mockDispatch).toHaveBeenCalled();
  });
});
