import React, { PureComponent } from 'react';
import ListArticles from '../../components/ListArticles.js';

export default class ArticlesGlobal extends PureComponent {
  render() {
    const limit = 7;
    const { page, ...rest } = this.props.queryString;
    const articlesQueryParams = {
      offset: (page ? +page : 0) * limit,
      limit,
      ...rest 
    }

    return <ListArticles limit={limit} articlesQueryParams={articlesQueryParams}/>
  }
}
