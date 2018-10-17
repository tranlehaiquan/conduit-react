import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Loadable from 'react-loadable'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Login from './views/authe/Login';
// import Register from './views/authe/Register';
import Profile from './views/Profile';
import Setting from './views/Setting';
import ArticleEditor from './views/ArticleEditor';
import ArticleDetail from './views/ArticleDetail';

const RegisterLoadable = Loadable({
  loader: () => import('./views/authe/Register'),
  loading: () => <div>Loading...</div>
})

export default class App extends Component {
  render() {
    return(
      <div id="app">
        <BrowserRouter>
          <Fragment>
            <Header></Header>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={RegisterLoadable} />
              <Route path="/profile" component={Profile} />
              <Route path="/setting" component={Setting} />
              <Route path="/articleEditor" component={ArticleEditor} />
              <Route path="/articleDetail" component={ArticleDetail} />
            <Footer></Footer>
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}
