import React, { Component } from 'react';
import PropTypes from 'prop-types'

import ArticlePreview from './ArticlePreview';
import Pagination from './Pagination';

import { connect } from 'react-redux';
import { fetchArticles } from '../store/actions';
import { withRouter } from 'react-router-dom'
import omit from 'lodash/omit';

class ListArticles extends Component {
  static propTypes = {
    articles: PropTypes.array,
    articlesCount: PropTypes.number,
    articlesQueryParams: PropTypes.object,
    fetchArticles: PropTypes.func,
    history: PropTypes.object,
    feed: PropTypes.bool
  };

  static defaultProps = {
    articles: [],
    articlesCount: 0,
    articlesQueryParams: {
    },
    fetchArticles: null,
    history: null,
    feed: false
  };

  state = {
    page: this.props.articlesQueryParams.page || 1,
    query: omit(this.props.articlesQueryParams, 'page')
  }

  componentDidMount () {
    const { fetchArticles, feed } = this.props;
    const { query, page } = this.state;

    const params = Object.assign(
      {}, 
      {offset: (page - 1) * query.limit}, 
      query,
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
      const { feed, fetchArticles, history } = this.props;
      const { query } = this.state;
      const { page } = this.state;
      const params = Object.assign(
        {}, 
        query,
        {offset: (page - 1) * query.limit}, 
      );

      fetchArticles(params, feed);
      history.push(`/?page=${page}`);
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
