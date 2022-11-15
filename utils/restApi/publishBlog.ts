import axios from "../functions/axios";

export const publishBlog = async (data: any) => {
  try {
    const response = await axios(true).post(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/create`,
      data
    );
    return response.data;
  } catch (error: any) {
    throw error?.response?.data ?? error.message;
  }
};
