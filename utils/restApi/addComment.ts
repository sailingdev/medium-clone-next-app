import axios from "../functions/axios";

export const addComment = async (data: any) => {
  try {
    const response = await axios(true).post(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/add_comment`,
      data
    );
    return response.data;
  } catch (error: any) {
    throw error?.response?.data ?? error.message;
  }
};
