export interface User {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  token?: string;
}

export interface lognType {
  email: string;
  password: string;
}

export interface registerType {
  username: string;
  email: string;
  password: string;
}
