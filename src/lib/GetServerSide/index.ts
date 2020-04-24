// All this get must excute from server side
import axios from './axios';
import { ParsedUrlQuery } from 'querystring'
import { ResponseGetArticle, ResponseGetSpecifcArticleBySlug, ResponseGetTags } from '../../models';

const DEFAULT_LIMIT = 20;

interface ParamsGetArtilces {
  tag: string;
  offset: number;
  favoriteBy?: string;
  author: string;
};

interface ParamsGetArtilcesFeed {
  tag?: string;
  limit?: number;
  offset?: number;
};

/**
 * Pick query from browser query
 * @param query 
 */
function pickArticleQuery(query: ParsedUrlQuery): ParamsGetArtilces {
  // query can be string or string[]
  const { tag = '', author = '' } = query;
  const page = query.page ?  Number(query.page) : 0;
  const offset = page ? (page - 1) * DEFAULT_LIMIT : 0;
  const articleQuery: ParamsGetArtilces = { 
    tag: Array.isArray(tag) ? tag.join(',') : tag, 
    offset, 
    author: Array.isArray(author) ? author.join(',') : author,
  };

  return articleQuery;
}

export const getListArtilce = async (params: ParsedUrlQuery): Promise<ResponseGetArticle> => {
  const paramsFiltered: ParamsGetArtilces = pickArticleQuery(params);
  const getArticlesResult = await axios.get('/api/articles', {
    params: paramsFiltered,
  });

  const articles: ResponseGetArticle = getArticlesResult?.data.data;

  return articles;
};

export const getListArtilceFeed = async (params: ParsedUrlQuery, headers: any = {}): Promise<ResponseGetArticle> => {
  const paramsFiltered: ParamsGetArtilces = pickArticleQuery(params);
  const getArticlesResult = await axios.get('/api/articles/feed', {
    params: paramsFiltered,
    headers,
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
