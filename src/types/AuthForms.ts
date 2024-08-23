export interface IRegisterUser {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IFormErrors {
  message?: string;
}

export interface IFormErrors {
  message?: string;
}

export interface IFormSuccess {
  message?: string;
}

export interface IUser {
  _id: string;
  username: string;
  verified: boolean;
  email: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}


