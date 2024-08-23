import API from "@/config/API";

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

export const register = async (data : ISignUp) => API.post("/auth/sign-up", data);
export const login = async (data : ISignIn) => API.post("/auth/sign-in", data);
export const logout = async () => API.get("/auth/logout");

