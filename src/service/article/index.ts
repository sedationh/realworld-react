import { request } from "../../utils/request";
import { Article } from "./type";

export const getArticles = (params: Article) => {
  return request({
    method: "GET",
    url: "/articles",
    params,
  });
};
export const getArticleFeed = (params: Article) => {
  return request({
    method: "GET",
    url: "/articles/feed",
    params,
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
