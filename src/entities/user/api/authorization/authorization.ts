import {api} from '@app/api';
import {TUser} from '@entities/user/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

type TRequestProps = {
  email: string;
  password: string;
};

type TResponse = {user: TUser} & {
  success?: boolean;
  message?: string;
};

export const authorization = createAsyncThunk<
  TUser,
  TRequestProps,
  {rejectValue: string}
>('authorization', async (authParams, {rejectWithValue}) => {
  const {data, headers, ok, status} = await api.post<TResponse>(
    '/auth/sign_in',
    authParams,
  );
  const {message, success} = data!;
  if (message && success == false) {
    return rejectWithValue(message);
  }
  if (status != 200) {
    return rejectWithValue('Произошла ошибка, пожалуйста, повторите!');
  }

  if (headers) {
    api.setHeaders({
      'access-token': headers['access-token'],
      client: headers['client'],
      uid: headers['uid'],
    });
  }
  return {
    avatar_url: data!.user.avatar_url,
    id: data!.user.id,
    username: data!.user.username,
  };
});
