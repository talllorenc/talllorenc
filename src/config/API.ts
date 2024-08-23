import axios from "axios";
import queryClient from "./queryClient";

const options = {
  baseURL: "http://localhost:8080",
  withCredentials: true,
};

const TokenRefreshClient = axios.create(options);
TokenRefreshClient.interceptors.response.use((response) => response.data);

const API = axios.create(options);

API.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const { config, response } = error;
    const { status, data } = response || {};

    if (status === 401 && data?.message === "InvalidAccessToken") {
      try {
        await TokenRefreshClient.get("/auth/refresh");
        return TokenRefreshClient(config);
      } catch (error) {
        queryClient.clear();
        window.location.href= "/sign-in";
      }
    }

    return Promise.reject({ status, ...data });
  }
);

export default API;
