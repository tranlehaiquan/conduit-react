import React, { PureComponent } from 'react';
import ListArticles from '../../components/ListArticles.js';

export default class ArticlesGlobal extends PureComponent {
  render() {
    return <ListArticles {...this.props}/>
  }
}
