import React, { Component, Fragment } from 'react';
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';
import {mainRouters as routers} from './route';
import { getTokenFromCookie } from './utils/cookie';
import { setHeaderAuthorization } from './config/httpRequest';
import { getCurrentUser } from './api';
import { setUser, cleanUser } from './store/actions';

class App extends Component {
  static propTypes = {
    setUser: PropTypes.func.isRequired,
    cleanUser: PropTypes.func.isRequired
  }

  async componentDidMount() {
    const token = getTokenFromCookie();
    const { setUser, cleanUser } = this.props;

    if(token) {
      setHeaderAuthorization(token);
      try {
        const { data } = await getCurrentUser();

        setUser(data.user);
      } catch({response}) {
        cleanUser();
      }
    }
  }

  render() {
    return(
      <div id="app">
        <BrowserRouter>
          <Fragment>
            <Header></Header>
            {routers}
            <Footer></Footer>
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch) => ({
    setUser: (user) => {
      dispatch(setUser(user));
    },
    cleanUser: () => {
      dispatch(cleanUser());
    }
  })
)(App);
