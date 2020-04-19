// All this get must excute from server side
import axios from './axios';
import pick from 'lodash/pick';
import { ResponseGetArticle, ResponseGetSpecifcArticleBySlug, ResponseGetTags } from '../../models';

const paramKeys: string[] = ['tag', 'limit', 'offset', 'favoriteBy'];

interface ParamsGetArtilces {
  tag?: string;
  limit?: number;
  offset?: number;
  favoriteBy?: string;
};

const paramKeysFeed: string[] = ['tag', 'limit', 'offset'];

interface ParamsGetArtilcesFeed {
  tag?: string;
  limit?: number;
  offset?: number;
};

export const getListArtilce = async (params: ParamsGetArtilces): Promise<ResponseGetArticle> => {
  const paramsFiltered: ParamsGetArtilces = pick(params, paramKeys);
  const getArticlesResult = await axios.get('/api/articles', {
    params: paramsFiltered,
  });

  const articles: ResponseGetArticle = getArticlesResult?.data.data;

  return articles;
};

export const getListArtilceFeed = async (params: ParamsGetArtilcesFeed): Promise<ResponseGetArticle> => {
  const paramsFiltered: ParamsGetArtilces = pick(params, paramKeysFeed);
  const getArticlesResult = await axios.get('/api/articles/feed', {
    params: paramsFiltered,
  });

  const articles: ResponseGetArticle = getArticlesResult?.data.data;

  return articles;
};

export const getSpecificArticleBySlug = async (slug: string): Promise<ResponseGetSpecifcArticleBySlug> => {
  const articleResult = await axios.get(`${process.env.BACK_END_URL}/api/tags`);

  const article: ResponseGetSpecifcArticleBySlug = articleResult?.data.data;
  return article;
};

export const getListTag = async (): Promise<ResponseGetTags> => {
  const tagsResult = await axios.get('/api/tags');

  const tags: ResponseGetTags = tagsResult?.data.data;
  return tags;
}
