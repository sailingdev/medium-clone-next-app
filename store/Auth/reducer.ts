import { createReducer } from "@reduxjs/toolkit";

import { logout, login, RemoveError, autoLogin, profileUpdate } from "./actions";

type authState = {
  isSuccess: boolean;
  isPending: boolean;
  error?: string;
  userData?: IUserData;
};

const initialState: authState = {
  isPending: false,
  isSuccess: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => {
      state.isPending = true;
      state.isSuccess = false;
      state.error = undefined;
      state.userData = undefined;
    })
    .addCase(login.rejected, (state, { error }) => {
      state.isPending = false;
      state.error = error.message;
    })
    .addCase(login.fulfilled, (state, { payload }) => {
      state.isPending = false;
      state.isSuccess = true;
      state.userData = payload.data.user;
      localStorage.setItem("accessToken", payload.data.token.accessToken);
      localStorage.setItem("refreshToken", payload.data.token.refreshToken);
    })
    .addCase(autoLogin.pending, (state) => {
      state.isPending = true;
      state.isSuccess = false;
      state.error = undefined;
      state.userData = undefined;
    })
    .addCase(autoLogin.rejected, (state) => {
      state.isPending = false;
      state.userData = undefined;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    })
    .addCase(autoLogin.fulfilled, (state, { payload }) => {
      state.isPending = false;
      state.isSuccess = true;
      state.userData = payload.data.user;
      localStorage.setItem("accessToken", payload.data.token.accessToken);
      localStorage.setItem("refreshToken", payload.data.token.refreshToken);
    })
    .addCase(profileUpdate.pending, (state) => {
      state.isPending = true;
      state.error = undefined;
      state.userData = undefined;
    })
    .addCase(profileUpdate.rejected, (state, { error }) => {
      state.isPending = false;
      state.error = error.message;
    })
    .addCase(profileUpdate.fulfilled, (state, { payload }) => {
      state.isPending = false;
      state.userData = payload.data;
    })
    .addCase(logout.fulfilled, (state) => {
      state.userData = undefined;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    })
    .addCase(RemoveError, (state) => {
      state.error = undefined;
    });
});
