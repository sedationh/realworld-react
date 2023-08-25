import { request } from "../../utils/request";

export const getAuthor = (username: string) => {
  return request({
    method: "GET",
    url: `/profiles/${username}`,
  });
};

export const followAuthor = (username: string) => {
  return request({
    method: "POST",
    url: `/profiles/${username}/follow`,
  });
};

export const unFollowAuthor = (username: string) => {
  return request({
    method: "DELETE",
    url: `/profiles/${username}/follow`,
  });
};
