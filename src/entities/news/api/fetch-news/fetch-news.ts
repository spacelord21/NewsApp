import { api } from "@app/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type TNewsModel = {
  id: number;
  title: string;
  image_url: string;
  image_additional_url: string;
  body: string;
  short_text: string;
  created_at: string;
  category: null | string;
  icon: null | string;
  model_name: string;
  table_name: string;
};

type TResponse = {
  news?: TNewsModel[];
  errors?: string[];
};

export const fetchNews = createAsyncThunk<
  TNewsModel[],
  void,
  { rejectValue: string }
>("fetchNews", async (_, { rejectWithValue }) => {
  const { data, status } = await api.get<TResponse>("/news");
  if (!data) {
    return rejectWithValue("Что-то пошло не так, пожалуйста, повторите!");
  }
  if (!data.news) {
    return rejectWithValue("Что-то пошло не так, пожалуйста, повторите!");
  }
  if (status === 401 && data.errors) {
    return rejectWithValue(data.errors[0]);
  }
  return data.news;
});
