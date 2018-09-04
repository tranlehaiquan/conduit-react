import React, {Component} from 'react';

export default class ArticleFeedNav extends Component {
  render() {
    return(
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a className="nav-link disabled" href="">Your Feed</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="">Global Feed</a>
          </li>
        </ul>
      </div>
    )
  }
}
