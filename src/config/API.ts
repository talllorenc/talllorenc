import axios from "axios";

const options = {
  baseURL: "http://localhost:8080",
  withCredentials: true,
};

const TokenRefreshClient = axios.create(options);
const API = axios.create(options);

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response) {
      if (error.response.status === 401 ||
        error.response.data.message === "Not authorized" ||
        (error.response.data.message === "InvalidAccessToken" && error.config && !error.config._retry)) {

        originalConfig._retry = true;

        try {
          await TokenRefreshClient.get("/auth/refresh");
          return API(originalConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default API;
