// api
import { request } from "../utils/request";

export const register = (user) => {
  return request({
    method: "POST",
    url: "/users",
    data: { user },
  });
};

export const login = async (user) => {
  const {
    user: { token },
  } = await request({
    method: "POST",
    url: "/users/login",
    data: { user },
  });
  // setLocalToken(token);

  return user;
};

export const updateUser = (user) => {
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

export const getArticles = (params) => {
  return request({
    method: "GET",
    url: "/articles",
    params,
  });
};
export const getArticleFeed = (parmas) => {
  return request({
    method: "GET",
    url: "/articles/feed",
    parmas,
  });
};
export const getArticle = (slug) => {
  return request({
    method: "GET",
    url: `/articles/${slug}`,
  });
};

export const createArticle = (article) => {
  return request({
    method: "POST",
    url: "/articles",
    data: { article },
  });
};

export const deleteArticle = (slug) => {
  return request({
    method: "DELETE",
    url: `/articles/${slug}`,
  });
};

export const favoriteArticle = (slug) => {
  return request({
    method: "POST",
    url: `/articles/${slug}/favorite`,
  });
};
export const unfavoriteArticle = (slug) => {
  return request({
    method: "DELETE",
    url: `/articles/${slug}/favorite`,
  });
};

export const getComments = (slug) => {
  return request({
    method: "GET",
    url: `/articles/${slug}/comments`,
  });
};

export const createComments = (slug, comment) => {
  return request({
    method: "POST",
    url: `/articles/${slug}/comments`,
    data: { comment },
  });
};
export const deleteComments = (slug, id) => {
  return request({
    method: "DELETE",
    url: `/articles/${slug}/comments/${id}`,
  });
};
export const getTags = () => {
  return request({
    method: "GET",
    url: "/tags",
  });
};

export const getAuthor = (username) => {
  return request({
    method: "GET",
    url: `/profiles/${username}`,
  });
};

export const followAuthor = (username) => {
  return request({
    method: "POST",
    url: `/profiles/${username}/follow`,
  });
};

export const unFollowAuthor = (username) => {
  return request({
    method: "DELETE",
    url: `/profiles/${username}/follow`,
  });
};
