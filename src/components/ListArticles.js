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
    fetchArticles: PropTypes.func
  };

  static defaultProps = {
    articles: [],
    articlesCount: 0,
    fetchArticles: null
  };

  async componentDidMount () {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <React.Fragment>
        { articles.map((article) => (
          <ArticlePreview article={article} key={article.slug}/>
        ))}

        <Pagination/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ home }) => ({
  articles: home.articles,
  articlesCount: home.articlesCount
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListArticles);
