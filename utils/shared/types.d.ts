interface IUserToken {
  accessToken: string;
  refreshToken: string;
}

interface IUserData {
  id: string;
  phone: string;
  email?: string;
  firstname: string;
  lastname: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ILogin {
  email: string;
  password: string;
}
