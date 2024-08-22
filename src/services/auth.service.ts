import { API } from "@/config/API";
import axiosInstance from "@/config/axiosInstance";

interface ISignIn {
  email: string;
  password: string;
}

interface ISignUp {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

class Auth {
  signIn({ email, password }: ISignIn) {
    return axiosInstance.post(`${API.auth.SIGNIN}`, {
      email,
      password,
    });
  }

  signUp({ email, username, password, confirmPassword }: ISignUp) {
    return axiosInstance.post(`${API.auth.SIGNUP}`, {
      email,
      username,
      password,
      confirmPassword,
    });
  }
}

const authService = new Auth();
export default authService;
