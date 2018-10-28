import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tags from '../components/Tags';
import ArticlePreview from '../components/ArticlePreview'
import ArticleFeedNav from '../components/ArticleFeedNav'
import Pagination from '../components/Pagination'

import { fetchTags } from '../store/actions';

class Home extends Component {
  static propTypes = {
    fetchTags: PropTypes.func,
    tags: PropTypes.array
  }

  static defaultProps = {
    fetchTags: null,
    tags: []
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  render() {
    return(
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <ArticleFeedNav></ArticleFeedNav>
              <ArticlePreview />
              <div className="text-xs-center">
                <Pagination></Pagination>              
              </div>
            </div>
            <div className="col-md-3">
              <Tags tags={this.props.tags}></Tags>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ home }) => ({
  tags: home.tags
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => {
    dispatch(fetchTags());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);
