import { createSelector, createSlice } from "@reduxjs/toolkit";
import { TNews } from "../types";
import { useSelector } from "react-redux";
import { fetchMoreNews, fetchNews } from "../api";
import { mappedData } from "../api/fetch-news/mapper";
import { RootState } from "@app/store/@types";

/* 
  т.к в предоставленном api нет возможности постраничной загрузки новостей, 
  я сделаю искусственный infinity scroll, изначально при авторизации загрузятся
  все новости, но с помощью redux'a я буду менять значение page и с таймаутом дополнять
  список отображаемых новостей 
*/

const DEFAULT_VALUE_OF_NEWS_PER_PAGE = 10;

export type TNewsSlice = {
  news: TNews[];
  loading: boolean;
  errorMessage: string;
  displayedNews: TNews[];
  amountOfPages: number;
};

export const initialState: TNewsSlice = {
  news: [],
  errorMessage: "",
  loading: false,
  displayedNews: [],
  amountOfPages: 0,
};

export const newsReducer = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state, payload) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchNews.rejected, (state, { payload }) => {
      return { ...state, loading: false, errorMessage: payload! };
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      return {
        ...state,
        amountOfPages: Math.ceil(
          payload.length / DEFAULT_VALUE_OF_NEWS_PER_PAGE
        ),
        loading: false,
        errorMessage: "",
        news: mappedData(payload),
        displayedNews: mappedData(
          payload.slice(0, DEFAULT_VALUE_OF_NEWS_PER_PAGE)
        ),
      };
    });
    builder.addCase(fetchMoreNews.pending, (state, _) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchMoreNews.fulfilled, (state, { payload }) => {
      const newsLength = state.news.length;
      const currentDisplayedNews = state.displayedNews;
      const displayedNewsLength = currentDisplayedNews.length;
      const nextSlice =
        payload * DEFAULT_VALUE_OF_NEWS_PER_PAGE > newsLength
          ? newsLength
          : payload * DEFAULT_VALUE_OF_NEWS_PER_PAGE;
      return {
        ...state,
        loading: false,
        displayedNews: [
          ...currentDisplayedNews,
          ...state.news.slice(displayedNewsLength, nextSlice),
        ],
      };
    });
  },
});

export const useNews = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.newsReducer,
      (state) => {
        return state;
      }
    )
  );
