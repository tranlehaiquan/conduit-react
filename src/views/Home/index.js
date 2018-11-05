import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Tags from '../../components/Tags';
import ArticleFeedNav from './ArticleFeedNav';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

export default  class Home extends Component {ArticleFeedNav
  static propTypes = {
    fetchTags: PropTypes.func,
    tags: PropTypes.array,
  }

  static defaultProps = {
    fetchTags: null,
    tags: [],
  }

  render() {
    const { routers } = this.props;

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
              {
                routers.map((router) => (
                  <RouteWithSubRoutes key={router.name} {...router} />
                ))
              }

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
