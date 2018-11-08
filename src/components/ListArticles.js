import React, { Component } from 'react';
import PropTypes from 'prop-types'

import ArticlePreview from './ArticlePreview';
import Pagination from './Pagination';

import { connect } from 'react-redux';
import { fetchArticles } from '../store/actions';
import { withRouter } from 'react-router-dom'

/**
 * ListArticles will recive
 * articles, articlesCount
 * articlesQueryParams params go with when call API articles
 * feed is feed or not?
 * offset is number use this to caculate to page number
 */
class ListArticles extends Component {
  static propTypes = {
    articles: PropTypes.array,
    articlesCount: PropTypes.number,
    articlesQueryParams: PropTypes.object,
    fetchArticles: PropTypes.func,
    feed: PropTypes.bool,
    offset: PropTypes.number.isRequired,
    history: PropTypes.object,
  };

  static defaultProps = {
    articles: [],
    articlesCount: 0,
    fetchArticles: null,
    articlesQueryParams: {},
    feed: false,
    history: null,
  };

  componentDidMount () {
    const { fetchArticles, feed, articlesQueryParams, offset } = this.props;

    const params = Object.assign(
      {},
      {offset}, 
      articlesQueryParams
    );
    fetchArticles(params, feed);
  }

  changePage = (page) => {
    this.props.history.push(`/?page=${page}`);
  }

  /**
   * Make action when offset page change
   */
  componentDidUpdate (prevProps, prevState) {
    if(prevProps.offset !== this.props.offset) {
      const { feed, fetchArticles, history, articlesQueryParams, offset } = this.props;
      const page = offset ? (offset / articlesQueryParams.limit) + 1 : 1;
      const params = Object.assign(
        {},
        {offset}, 
        articlesQueryParams
      );

      fetchArticles(params, feed);
      history.push(`/?page=${page}`);
    }
  }

  render() {
    const { articles, articlesCount, articlesQueryParams, offset } = this.props;
    const pageCount = Math.round( articlesCount / articlesQueryParams.limit );
    const page = offset ? (offset / articlesQueryParams.limit) + 1 : 1;

    return (
      <React.Fragment>
        { articles.map((article) => (
          <ArticlePreview article={article} key={article.slug}/>
        ))}

        <Pagination
          current={page}
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
