import { request, setLocalToken } from "../../utils/request";
import { User, LoginType, RegisterType } from "./type";

export const register = (user: RegisterType) => {
  return request({
    method: "POST",
    url: "/users",
    data: { user },
  });
};

export const login = async (user: LoginType) => {
  const {
    data: {
      user: { token },
    },
  } = await request({
    method: "POST",
    url: "/users/login",
    data: { user },
  });
  setLocalToken(token);

  return user;
};

export const updateUser = (user: User) => {
  return request({
    method: "PUT",
    url: "/user",
    data: { user },
  });
};

export const getUser = () => {
  return request({
    method: "GET",
    url: "/user",
  });
};
