import React, { PureComponent } from 'react';
import ListArticles from '../../components/ListArticles.js';
import { DEFAULT_LIMIT_ARTICLES } from './config';

export default class ArticlesFeed extends PureComponent {
  render() {
    const limit = DEFAULT_LIMIT_ARTICLES;
    const { page, ...rest } = this.props.queryString;
    const articlesQueryParams = {
      page: page ? Number(page) : 1,
      limit,
      ...rest
    }

    return <ListArticles articlesQueryParams={articlesQueryParams}/>
  }
}
