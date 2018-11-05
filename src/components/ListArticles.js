import React, { Component } from 'react';
import PropTypes from 'prop-types'

import ArticlePreview from './ArticlePreview';
import Pagination from './Pagination';

import { connect } from 'react-redux';
import { fetchArticles } from '../store/actions';
import { withRouter } from 'react-router-dom'

import { DEFAULT_LIMIT_ARTICLES } from './config';

class ListArticles extends Component {
  static propTypes = {
    articles: PropTypes.array,
    articlesCount: PropTypes.number,
    articlesQueryParams: PropTypes.object,
    fetchArticles: PropTypes.func,
    history: PropTypes.object,
    feed: PropTypes.bool,
    limit: PropTypes.number
  };

  static defaultProps = {
    articles: [],
    articlesCount: 0,
    limit: DEFAULT_LIMIT_ARTICLES,
    articlesQueryParams: {
    },
    fetchArticles: null,
    history: null,
    feed: false
  };

  state = {
    page: this.props.articlesQueryParams.offset ? this.props.articlesQueryParams.offset / this.props.limit : 1,
    query: this.props.articlesQueryParams
  }

  async componentDidMount () {
    const { articlesQueryParams, fetchArticles, feed } = this.props;
    const params = Object.assign(
      {}, 
      {offset: articlesQueryParams.offset}, 
      articlesQueryParams,
      );
      
    fetchArticles(params, feed);
  }

  changePage = (page) => {
    this.setState(() => ({
      page: page
    }));
  }

  /**
   * Make action when offset page change
   */
  componentDidUpdate (prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      const { articlesQueryParams, feed, fetchArticles, history, limit } = this.props;
      const { page } = this.state;
      const params = Object.assign(
        {}, 
        articlesQueryParams,
        {offset: page * limit}, 
      );

      fetchArticles(params, feed);

      if(!page) {
        history.push('/');
      } else {
        history.push(`/?page=${page + 1}`);
      }
    }
  }

  render() {
    const { articles, articlesCount, articlesQueryParams } = this.props;
    const pageCount = Math.round( articlesCount / articlesQueryParams.limit );
    const { page } = this.state;

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
