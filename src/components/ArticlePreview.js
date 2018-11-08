import React, {Component} from 'react';
import Proptypes from 'prop-types';
import classnames from 'classnames';

export default class PostPreview extends Component {
  static propType = {
    article: Proptypes.object
  };

  static defaultProps = {
    article: null
  };

  render() {
    const { author, title, description, favoritesCount, createdAt, favorited } = this.props.article;
    const buttonStyle = classnames(
      'btn btn-outline-primary btn-sm pull-xs-right',
      favorited && 'active'
    );

    return(
      <div className="article-preview">
        <div className="article-meta">
          <Author author={author} createdAt={createdAt} />
          <button className={buttonStyle}>
            <i className="ion-heart"></i> { favoritesCount }
          </button>
        </div>
        <a href="..." className="preview-link">
          <h3>{ title }</h3>
          <p>{ description }</p>
          <span>Read more...</span>
        </a>
      </div>
    )
  }
}

function Author(props) {
  const { createdAt } = props;
  const { image, username } = props.author;

  return (
    <React.Fragment>
      <a href="profile.html">
        <img alt="profile" src={image} />
      </a>
      <div className="info">
        <a href="..." className="author">{ username }</a>
        <span className="date">{ createdAt }</span>
      </div>
    </React.Fragment>
  )
}
