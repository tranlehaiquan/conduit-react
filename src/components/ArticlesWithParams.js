import React, { Component } from 'react';
import { parseQueryString, getDisplayName } from '../utils/index';
import { DEFAULT_LIMIT_ARTICLES } from './config';

import PropTypes from 'prop-types';
import defaults from 'lodash/defaults';

/**
 * HOC will whole state of query
 * and re-active when url change
 * Parse some query params to props Article
 * @param {Object} WrapComponent 
 */
function articlesWithParams(WrapComponent) {
  class ArticlesWithParams extends Component {
    static propTypes = {
      history: PropTypes.object
    };

    static defaultProps = {
      history: null
    }

    constructor(props) {
      super(props);

      // First time load query from URL
      const {page, ...query} = parseQueryString(window.location.search);
      const defaultsQuery = defaults(query, {
        limit: DEFAULT_LIMIT_ARTICLES
      });

      this.state = {
        page: page ? Number(page) : 1,
        query: defaultsQuery
      }
    }

    componentDidMount() {
      const { history } = this.props;

      this.unListen = history.listen((location, action) => {
        const {page, ...query} = parseQueryString(location.search);
        const defaultsQuery = defaults(query, {
          limit: DEFAULT_LIMIT_ARTICLES
        });

        this.setState((preState) => ({
          page: page ? Number(page) : 1,
          query: defaultsQuery
        }));
      });
    }

    componentWillUnmount() {
      this.unListen();
    }

    render() {
      const { page, query } = this.state;
      const offset = (page - 1) * query.limit;

      return (
        <WrapComponent offset={offset} articlesQueryParams={query}/>
      )
    }
  }

  ArticlesWithParams.displayName = `ArticlesWithParams-${getDisplayName(WrapComponent)}`;

  return ArticlesWithParams;
}

export default articlesWithParams;
