import axios from "axios";

const refreshAccessToken = async () => {
  const rToken = localStorage.getItem("refreshToken");
  if (rToken) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refreshToken`,
        {
          rToken,
        }
      );
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      return null;
    }
  } else {
    return null;
  }
};

const customizedAxios = (isPrivate = false) => {
  // axios.defaults.baseURL = baseURL;

  if (!isPrivate) return axios;

  axios.interceptors.request.use(
    async (config) => {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${accessToken}`,
        };
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const config = error?.config;

      if (error?.response?.status === 401 && !config?.sent) {
        config.sent = true;

        const result = await refreshAccessToken();

        if (result?.accessToken) {
          console.log("result?.accessToken: ", result?.accessToken);
          config.headers = {
            ...config.headers,
            authorization: `Bearer ${result?.accessToken}`,
          };
        }

        return axios(config);
      }
      return Promise.reject(error);
    }
  );

  return axios;
};

export default customizedAxios;
