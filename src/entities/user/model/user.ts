import { createAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { TUser, TUserTokens } from "../types";
import { authorization } from "../api";
import { api } from "@app/api";
import { useSelector } from "react-redux";
import { RootState } from "@app/store/@types";

const initialTokensState: TUserTokens = {
  accessToken: "",
  client: "",
  uid: "",
};

export const initialState: TUser & { errorMessage: string; loading: boolean } =
  {
    avatar_url: "",
    id: 0,
    username: "",
    errorMessage: "",
    tokens: initialTokensState,
    loading: false,
  };

export const logout = createAction("logout");

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authorization.fulfilled, (state, { payload }) => {
      api.setHeaders({
        "access-token": payload.tokens.accessToken,
        client: payload.tokens.client,
        uid: payload.tokens.uid,
      });
      return { ...state, loading: false, errorMessage: "", ...payload };
    });
    builder.addCase(authorization.rejected, (state, { payload }) => {
      if (payload) {
        return { ...state, loading: false, errorMessage: payload };
      }
    });
    builder.addCase(authorization.pending, (state, payload) => {
      return { ...state, loading: true };
    });
    builder.addCase(logout, () => {
      api.deleteHeader("access-token");
      api.deleteHeader("client");
      api.deleteHeader("uid");
      return initialState;
    });
  },
});

export const useUser = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.user,
      (state): TUser => {
        return state;
      }
    )
  );
