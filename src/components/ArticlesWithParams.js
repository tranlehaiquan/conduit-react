import React, { Component } from 'react';
import { parseQueryString, getDisplayName } from '../utils/index';
import omit from 'lodash/omit';
import { DEFAULT_LIMIT_ARTICLES } from './config';

function articlesWithParams(WrapComponent) {
  class ArticlesWithParams extends Component {
    constructor(props) {
      super(props);

      // First time load query from URL
      const {page, limit, ...query} = parseQueryString(window.location.search);

      this.state = {
        page: page ? Number(page) : 1,
        limit: limit ? Number(limit) : DEFAULT_LIMIT_ARTICLES,
        query: omit(query, ['page', 'limit'])
      }
    }

    render() {
      const { page, limit, query } = this.state;
      const offset = page * limit;

      return (
        <WrapComponent />
      )
    }
  }
}
