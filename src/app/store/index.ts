import {newsReducer} from '@entities/news';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    newsReducer: newsReducer.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
