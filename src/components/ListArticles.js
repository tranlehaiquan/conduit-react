import React, { Component } from 'react';
import PropTypes from 'prop-types'

import ArticlePreview from './ArticlePreview';
import Pagination from './Pagination';

import { connect } from 'react-redux';
import { fetchArticles } from '../store/actions';

class ListArticles extends Component {
  static propTypes = {
    articles: PropTypes.array,
    articlesCount: PropTypes.number,
    articlesQueryParams: PropTypes.object,
    fetchArticles: PropTypes.func
  };

  static defaultProps = {
    articles: [],
    articlesCount: 0,
    articlesQueryParams: {
      limit: 7
    },
    fetchArticles: null
  };

  constructor(props) {
    super(props);

    this.state = {
      offset: 0
    }
  }

  async componentDidMount () {
    const { articlesQueryParams } = this.props;
    const params = Object.assign(
      {}, 
      {offset: this.state.offset * articlesQueryParams.limit}, 
      articlesQueryParams);

    this.props.fetchArticles(params);
  }

  changePage = (page) => {
    this.setState(() => ({
      offset: page
    }));
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.offset !== this.state.offset) {
      const { articlesQueryParams } = this.props;
      const params = Object.assign(
        {}, 
        {offset: this.state.offset * articlesQueryParams.limit}, 
        articlesQueryParams);

      this.props.fetchArticles(params);
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
  fetchArticles: (params) => {
    dispatch(fetchArticles(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListArticles);
