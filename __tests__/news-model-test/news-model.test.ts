import { PayloadAction, Action } from "@reduxjs/toolkit";
import {
  TNewsSlice,
  initialState,
  newsReducer,
} from "../../src/entities/news/model";
import { fetchMoreNews, fetchNews } from "../../src/entities/news/api";
import { TNewsModel } from "../../src/entities/news/api/fetch-news/fetch-news";
import { mappedData } from "../../src/entities/news/api/fetch-news/mapper";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("../../src/entities/news/model/consts", () => ({
  DEFAULT_VALUE_OF_NEWS_PER_PAGE: 3,
}));

const news: TNewsModel[] = [
  {
    body: "body",
    created_at: "now",
    id: 1,
    image_additional_url: "asd",
    image_url: "asdad",
    short_text: "adag",
    title: "title",
    category: null,
    icon: "asd",
    model_name: "asda",
    table_name: "asdas",
  },
  {
    body: "body",
    created_at: "now",
    id: 2,
    image_additional_url: "asd",
    image_url: "asdad",
    short_text: "adag",
    title: "title",
    category: null,
    icon: "asd",
    model_name: "asda",
    table_name: "asdas",
  },
];

describe("news slice", () => {
  test("тест fetchNews.fulfilled", () => {
    const state = { ...initialState };
    const payload: TNewsModel[] = news;
    const action: PayloadAction<TNewsModel[]> = {
      type: fetchNews.fulfilled.type,
      payload: payload,
    };
    const mappedPayload = mappedData(payload);
    const nextState = newsReducer.reducer(state, action);
    expect(nextState).toEqual({
      ...state,
      amountOfPages: Math.ceil(payload.length / 10),
      displayedNews: mappedPayload,
      news: mappedPayload,
    });
  });
  test("тест fetchNews.pending", () => {
    const state = { ...initialState };
    const action: Action = { type: fetchNews.pending.type };
    const nextState = newsReducer.reducer(state, action);
    expect(nextState).toEqual({ ...state, loading: true });
  });
  test("тест fetchNews.rejected", () => {
    const state = { ...initialState };
    const payload = "Что-то пошло не так";
    const action: PayloadAction<string> = {
      type: fetchNews.rejected.type,
      payload,
    };
    const nextState = newsReducer.reducer(state, action);
    expect(nextState).toEqual({
      ...state,
      loading: false,
      errorMessage: payload,
    });
  });
  test("тест fetchMoreNews.pending", () => {
    const state = { ...initialState };
    const action: Action = {
      type: fetchMoreNews.pending.type,
    };
    const nextState = newsReducer.reducer(state, action);
    expect(nextState).toEqual({
      ...state,
      loading: true,
    });
  });
  test("тест fetchMoreNews.fulfilled(default news per page=3, news=4, page=2)", () => {
    const moreNews = mappedData([...news, ...news]); // 4 items
    const state: TNewsSlice = {
      ...initialState,
      news: moreNews,
    };
    const action: PayloadAction<number> = {
      type: fetchMoreNews.fulfilled.type,
      payload: 2,
    };
    const nextState = newsReducer.reducer(state, action);
    expect(nextState.displayedNews).toEqual(moreNews);
  });
  test("тест fetchMoreNews.fulfilled(default news per page=3, news=8, page=2)", () => {
    const moreNews = mappedData([...news, ...news, ...news, ...news]); // 8 items
    const state: TNewsSlice = {
      ...initialState,
      news: moreNews,
    };
    const action: PayloadAction<number> = {
      type: fetchMoreNews.fulfilled.type,
      payload: 2,
    };
    const nextState = newsReducer.reducer(state, action);
    expect(nextState.displayedNews).toEqual(moreNews.slice(0, 6));
  });
  test("тест fetchMoreNews.fulfilled(default news per page=3, news=8, page=3)", () => {
    const moreNews = mappedData([...news, ...news, ...news, ...news]); // 8 items
    const state: TNewsSlice = {
      ...initialState,
      news: moreNews,
    };
    const action: PayloadAction<number> = {
      type: fetchMoreNews.fulfilled.type,
      payload: 3,
    };
    const nextState = newsReducer.reducer(state, action);
    expect(nextState.displayedNews).toEqual(moreNews);
  });
});
