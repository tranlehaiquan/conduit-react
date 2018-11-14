import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import NavBrand from '../components/NavBrand';
import Auth from '../components/Auth';

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
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'New Post',
    to: '/articleEditor',
    iconName: 'ion-compose'
  },
  {
    name: 'Setting',
    to: '/setting',
    iconName: 'ion-gear-a'
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
    const NavLinksLogged = renderNavLinks(afterLoginNavLinks);
    const NavLinks = renderNavLinks(beforeLoginNavLinks);
    return(
      <nav className="navbar navbar-light">
        <div className="container">
          <NavBrand/>
          <ul className="nav navbar-nav pull-xs-right">
            <Auth
              renderLoggedIn={() => {
                return NavLinksLogged
              }}
              renderLoggedOut={() => {
                return NavLinks
              }}
            />

            <Auth
              renderLoggedIn={({ auth, logout}) => {
                return (
                  <React.Fragment>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={`/profile/${auth.email}`}>
                        { auth.email }
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a href="/#" className="nav-link" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </React.Fragment>
                )
              }}
              renderLoggedOut={() => {
                return null
              }}
            />
          </ul>
        </div>
      </nav>
    )
  }
}
