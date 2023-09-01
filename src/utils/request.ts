import axios from "axios";
const request = axios.create({
  baseURL: "https://api.realworld.io/api",
});

let localToken = localStorage.getItem("token");

export const setLocalToken = (token) => {
  localToken = token;
  localStorage.setItem("token", token);
};

export const hasLogin = () => {
  return !!localToken;
};

export { request };
