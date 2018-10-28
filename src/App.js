import React, { Component, Fragment } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import {mainRouters as routers} from './route';
export default class App extends Component {
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
