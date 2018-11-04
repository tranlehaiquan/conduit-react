import React, { Component } from 'react';
import ListArticles from '../../components/ListArticles.js';

export default class ArticlesGlobal extends Component {
  render() {
    return <ListArticles limit="8"/>
  }
}
