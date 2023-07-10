import {newsReducer} from '@entities/news';
import {user} from '@entities/user';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    newsReducer: newsReducer.reducer,
    user: user.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
