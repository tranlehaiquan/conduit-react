import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const isLogin = false;

export default class ArticleFeedNav extends Component {
  render() {
    return(
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {isLogin && 
            (<li className="nav-item">
              <NavLink to="/feed" className="nav-link">Your Feed</NavLink>
            </li>)
          }
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="active">Global Feed</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
