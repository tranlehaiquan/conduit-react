import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">conduit</a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link exact to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/articleEditor" className="nav-link">
                <i className="ion-compose"></i>&nbsp;New Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/setting" className="nav-link">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
