import React, { Component } from 'react';
import PropTypes from 'prop-types'

import ArticlePreview from './ArticlePreview';
import Pagination from './Pagination';

import { connect } from 'react-redux';
import { fetchArticles } from '../store/actions';
import { withRouter } from 'react-router-dom'

import { DEFAULT_LIMIT_ARTICLES } from './config';
import { parseQueryString } from '../utils';

class ListArticles extends Component {
  static propTypes = {
    articles: PropTypes.array,
    articlesCount: PropTypes.number,
    articlesQueryParams: PropTypes.object,
    fetchArticles: PropTypes.func,
    history: PropTypes.object,
    feed: PropTypes.bool,
    offset: PropTypes.number
  };

  static defaultProps = {
    articles: [],
    articlesCount: 0,
    articlesQueryParams: {
      limit: DEFAULT_LIMIT_ARTICLES,
    },
    fetchArticles: null,
    history: null,
    feed: false,
    offset: 0
  };

  state = {
    offset: this.props.offset
  }

  async componentDidMount () {
    const { articlesQueryParams, fetchArticles, feed, history } = this.props;
    const params = Object.assign(
      {}, 
      {offset: this.state.offset * articlesQueryParams.limit}, 
      articlesQueryParams
    );

    fetchArticles(params, feed);
  }

  changePage = (page) => {
    this.setState(() => ({
      offset: page
    }));
  }

  /**
   * Make action when offset page change
   */
  componentDidUpdate (prevProps, prevState) {
    if(prevState.offset !== this.state.offset) {
      const { articlesQueryParams, feed, fetchArticles, history } = this.props;
      const { offset } = this.state;
      const params = Object.assign(
        {}, 
        {offset: this.state.offset * articlesQueryParams.limit}, 
        articlesQueryParams
      );

      fetchArticles(params, feed);

      if(!offset) {
        history.push('/');
      } else {
        history.push(`/?page=${offset + 1}`);
      }
    }
  }

  render() {
    const { articles, articlesCount, articlesQueryParams } = this.props;
    const pageCount = Math.round( articlesCount / articlesQueryParams.limit );
    const { offset } = this.state;

    return (
      <React.Fragment>
        { articles.map((article) => (
          <ArticlePreview article={article} key={article.slug}/>
        ))}

        <Pagination
          current={offset}
          pageCount={pageCount}
          onChange={this.changePage}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ home }) => ({
  articles: home.articles,
  articlesCount: home.articlesCount
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: (params, feed) => {
    dispatch(fetchArticles(params, feed));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListArticles));
