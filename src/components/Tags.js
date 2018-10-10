import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

const tagList = [
  {
    name: 'programming',
    to: 'programming'
  },
  {
    name: 'javascript',
    to: 'javascript'
  },
  {
    name: 'mean',
    to: 'mean'
  }
]

export default class Tags extends PureComponent {
  renderTags() {
    const tags = tagList.map((tag) => {
      return(
        <Link key={tag.name} to={`tag/${tag.to}`} className="tag-pill tag-default">
          { tag.name }
        </Link>
      );
    });
    return tags;
  }
  render() {
    return(
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          { this.renderTags() }
        </div>
      </div>
    )
  }
}
