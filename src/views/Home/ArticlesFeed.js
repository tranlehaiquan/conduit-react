import React, { Component } from 'react';
import ListArticles from '../../components/ListArticles.js';

export default class ArticlesFeed extends Component {
  render() {
    return <ListArticles limit="9" feed={true}/>
  }
}
