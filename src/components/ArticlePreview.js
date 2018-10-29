import React, {Component} from 'react';

export default class PostPreview extends Component {
  render() {
    const { author, title, body, description, createdAt } = this.props.article;

    return(
      <div className="article-preview">
        <div className="article-meta">
          <Author author={author} createdAt={createdAt} />
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart"></i> 29
          </button>
        </div>
        <a href="" className="preview-link">
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
        <a href="" className="author">{ username }</a>
        <span className="date">{ createdAt }</span>
      </div>
    </React.Fragment>
  )
}
