import axios from "axios";

export const publishBlog = async (data: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_APP_API}/blog/create`,
      data
    );
    return response.data;
  } catch (error: any) {
    throw error?.response?.data ?? error.message;
  }
};
