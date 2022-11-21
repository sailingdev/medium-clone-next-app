interface IUserToken {
  accessToken: string;
  refreshToken: string;
}

interface IUserData {
  id?: string;
  phone?: string;
  email?: string;
  avatar?: string;
  firstname?: string;
  lastname?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface IBlogData {
  userId: number;
  banner: string;
  title: string;
  description: string;
  slug: string;
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  Comment: any[];
  inEnd?: boolean;
}
