import { PayloadAction, Action } from "@reduxjs/toolkit";
import { initialState, logout, user } from "../../src/entities/user";
import { authorization } from "../../src/entities/user/api";
import { TUser } from "../../src/entities/user/types";

describe("user slice", () => {
  test("тест authorization.fulfilled", () => {
    const state = { ...initialState };
    const payload: TUser = {
      avatar_url: "avatar_url",
      id: 1,
      username: "username",
      tokens: {
        accessToken: "access-token",
        client: "client",
        uid: "uid",
      },
    };
    const action: PayloadAction<TUser> = {
      type: authorization.fulfilled.type,
      payload: payload,
    };
    const nextState = user.reducer(state, action);
    expect(nextState).toEqual({
      ...state,
      loading: false,
      errorMessage: "",
      ...payload,
    });
  });
  test("тест authorization.pending", () => {
    const state = { ...initialState };
    const action: Action = { type: authorization.pending.type };
    const nextState = user.reducer(state, action);
    expect(nextState).toEqual({ ...state, loading: true });
  });
  test("тест authorization.rejected", () => {
    const state = { ...initialState };
    const payload = "Что-то пошло не так";
    const action: PayloadAction<string> = {
      type: authorization.rejected.type,
      payload,
    };
    const nextState = user.reducer(state, action);
    expect(nextState).toEqual({
      ...state,
      loading: false,
      errorMessage: payload,
    });
  });
  test("тест logout action", () => {
    const state = { ...initialState };
    const nextState = user.reducer(state, logout());
    expect(nextState).toEqual(initialState);
  });
});
