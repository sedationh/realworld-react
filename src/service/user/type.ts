export interface User {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  token?: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  username: string;
  email: string;
  password: string;
}
