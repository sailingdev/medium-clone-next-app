import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/functions/axios";

export const RemoveError = createAction("auth/removeError");

export const login = createAsyncThunk("auth/login", async (data: ILogin) => {
  try {
    const response = await axios().post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      data
    );

    return response.data;
  } catch (error: any) {
    console.error("errorInThunk =>", error);
    throw error?.response?.data ?? error.message;
  }
});

export const autoLogin = createAsyncThunk(
  "auth/autoLogin",
  async (refreshToken: string) => {
    try {
      const response = await axios().post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refreshToken`,
        {
          refreshToken,
        }
      );

      return response.data;
    } catch (error: any) {
      console.error("errorInThunk =>", error);
      throw error?.response?.data ?? error.message;
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (refreshToken: string) => {
  try {
    await axios().post(`${process.env.NEXT_PUBLIC_API_URL}/auth/revokeRefreshTokens`, {
      refreshToken,
    });
  } catch (error: any) {
    console.error("errorInThunk =>", error);
    throw error?.response?.data ?? error.message;
  }
});

export const profileUpdate = createAsyncThunk("user/update", async (data: IUserData) => {
  try {
    const response = await axios(true).post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update`,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error("errorInThunk =>", error);
    throw error?.response?.data ?? error.message;
  }
});
