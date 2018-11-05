import React, { PureComponent } from 'react';
import ListArticles from '../../components/ListArticles.js';

export default class ArticlesFeed extends PureComponent {
  render() {
    return <ListArticles limit="9" articlesQueryParams={this.props.queryString} feed={true}/>
  }
}
