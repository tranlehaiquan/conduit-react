import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default class Tags extends PureComponent {
  renderTags() {
    const tags = this.props.tags.map((tag) => {
      return(
        <Link key={tag} to={`tag/${tag}`} className="tag-pill tag-default">
          { tag }
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
