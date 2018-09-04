import React, {Component} from 'react';
import Tags from '../components/Tags';
import ArticlePreview from '../components/ArticlePreview'
import ArticleFeedNav from '../components/ArticleFeedNav'
import Pagination from '../components/Pagination'

export default class Home extends Component {
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
              <ArticlePreview></ArticlePreview>
              <ArticlePreview></ArticlePreview>
              <ArticlePreview></ArticlePreview>
              <ArticlePreview></ArticlePreview>
              <ArticlePreview></ArticlePreview>
              <ArticlePreview></ArticlePreview>
              <div className="text-xs-center">
                <Pagination></Pagination>              
              </div>
            </div>
            <div className="col-md-3">
              <Tags></Tags>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
