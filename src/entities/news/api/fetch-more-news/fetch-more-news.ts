import { createAsyncThunk } from "@reduxjs/toolkit";

const DEFAULT_FAKE_TIMEOUT = 3000;

export const fetchMoreNews = createAsyncThunk<number, number>(
  "fetchMoreNews",
  async (page, _) => {
    return new Promise((res) =>
      setTimeout(() => {
        res(page);
      }, DEFAULT_FAKE_TIMEOUT)
    );
  }
);
