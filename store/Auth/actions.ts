import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loggedIn = createAction("auth/loggedIn");
export const loggedOut = createAction("auth/loggedOut");

export const loginAction = createAsyncThunk("auth/login", async (data: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      data
    );

    return response.data;
  } catch (error: any) {
    console.error("errorInThunk =>", error);
    throw error?.response?.data ?? error.message;
  }
});
