import React, { PureComponent } from 'react';
import ListArticles from '../../components/ListArticles.js';

export default class ArticlesFeed extends PureComponent {
  render() {
    return <ListArticles {...this.props}/>
  }
}
