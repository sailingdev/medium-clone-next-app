import axios from "../functions/axios";

export const registerUser = async (data: any) => {
  try {
    const response = await axios().post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      data
    );
    return response.data;
  } catch (error: any) {
    throw error?.response?.data ?? error.message;
  }
};
