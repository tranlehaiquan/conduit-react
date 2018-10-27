import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

const Logo = function() {
  return (
    <Link to="/" className="navbar-brand" href="index.html">
      conduit
    </Link>
  )
}

const beforeLoginNavLinks = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Register',
    to: '/register'
  },
  {
    name: 'Login',
    to: '/login'
  }
];

const afterLoginNavLinks = [
  {
    name: 'New Post',
    to: '/articleEditor',
    iconName: 'ion-compose'
  },
  {
    name: 'Setting',
    to: '/setting',
    iconName: 'ion-gear-a'
  },
  {
    name: 'Logout',
    to: '/logout'
  }
];

function renderNavLinks(navLinks) {
  const links = navLinks.map((navLink) => {
    return (
      <li className="nav-item" key={navLink.name}>
        <NavLink 
          activeClassName="active" 
          to={navLink.to} 
          className="nav-link"
          exact={navLink.exact}
        >
          {
            navLink.iconName &&
            <i className={navLink.iconName}></i> 
          }
          {navLink.name}
        </NavLink>
      </li>
    )
  });
  return links;
}
export default class Header extends Component {
  render() {
    const isAuth = false;
    const navLinks = isAuth ? afterLoginNavLinks : beforeLoginNavLinks;
    return(
      <nav className="navbar navbar-light">
        <div className="container">
          <Logo/>
          <ul className="nav navbar-nav pull-xs-right">
            {renderNavLinks(navLinks)}
          </ul>
        </div>
      </nav>
    )
  }
}
