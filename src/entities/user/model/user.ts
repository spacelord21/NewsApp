import { createAction, createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types";
import { authorization } from "../api";
import { api } from "@app/api";

const initialState: TUser & { errorMessage: string; loading: boolean } = {
  avatar_url: "",
  id: 0,
  username: "",
  errorMessage: "",
  loading: false,
};

export const logout = createAction("logout");

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authorization.fulfilled, (state, { payload }) => {
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
      console.log("here");
      api.deleteHeader("access-token");
      api.deleteHeader("client");
      api.deleteHeader("uid");
      return initialState;
    });
  },
});
