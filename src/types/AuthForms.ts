export interface IRegisterUser {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

