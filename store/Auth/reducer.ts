import { createReducer } from "@reduxjs/toolkit";

import { loggedIn, loggedOut, loginAction } from "./actions";

type authState = {
  isLoggedIn: boolean;
  isSuccess: boolean;
  isPending: boolean;
  error?: string;
};

const initialState: authState = {
  isLoggedIn: false,
  isPending: false,
  isSuccess: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loggedIn, (state) => {
      state.isLoggedIn = true;
    })
    .addCase(loggedOut, (state) => {
      state.isLoggedIn = false;
    })
    .addCase(loginAction.pending, (state) => {
      state.isPending = true;
      state.isSuccess = false;
      state.error = undefined;
    })
    .addCase(loginAction.rejected, (state, { error }) => {
      state.isPending = false;
      state.error = error.message;
    })
    .addCase(loginAction.fulfilled, (state, { payload }) => {
      state.isPending = false;
      state.isLoggedIn = true;
      state.isSuccess = true;
    });
});
