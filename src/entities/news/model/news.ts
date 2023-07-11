import { createSelector, createSlice } from "@reduxjs/toolkit";
import { TNews } from "../types";
import { useSelector } from "react-redux";
import { fetchNews } from "../api";
import { mappedData } from "../api/fetch-news/mapper";

type TNewsSlice = {
  news: TNews[];
  loading: boolean;
  errorMessage: string;
};

const initialState: TNewsSlice = {
  news: [],
  errorMessage: "",
  loading: false,
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
        loading: false,
        errorMessage: "",
        news: mappedData(payload),
      };
    });
  },
});

export const useNews = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.newsReducer,
      (state): TNewsSlice => {
        return state;
      }
    )
  );
