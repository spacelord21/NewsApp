import {createSelector, createSlice} from '@reduxjs/toolkit';
import {TNews} from '../types';
import {mockNews} from './mock-data';
import {useSelector} from 'react-redux';

const initialState: TNews[] = mockNews;

export const newsReducer = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    fetchNews: state => {
      return [];
    },
  },
});

export const useNews = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.newsReducer,
      (state): TNews[] => {
        return state;
      },
    ),
  );
