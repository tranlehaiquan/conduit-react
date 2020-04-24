export interface ProfileModel {
  id: string;
  email: string;
  username: string;
  bio: string;
  image: string;
}

export interface ArticleModel {
  id: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  favoritesCount: number;
  author: ProfileModel;
  tagList: string[];
  createdAt: string;
  updateAt: string;
}

export interface ResponseGetArticle {
  articles: ArticleModel[];
  articlesCount: number;
  limit: number;
}

export type ResponseGetTags = string[];

export interface ResponseGetSpecifcArticleBySlug {
  article: ArticleModel;
  favoritesCount: number;
  favorited: boolean;
}

export interface UserModel {
  id: string;
  email: string;
  username: string;
  bio: string;
  image: string;
}

export interface TokenModel {
  token: string;
  exp: number;
}

export interface ResponseError {
  statusCode: number;
  error: string;
}
