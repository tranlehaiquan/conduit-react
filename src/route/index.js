import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Home from '../views/Home';
import Login from '../views/authe/Login';
import Register from '../views/authe/Register';
import Profile from '../views/Profile';
import Setting from '../views/Setting';
import ArticleEditor from '../views/ArticleEditor';
import ArticleDetail from '../views/ArticleDetail';

const homeRouters = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/setting',
    component: Setting,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/articleEditor',
    component: ArticleEditor,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/articleDetail',
    component: ArticleDetail
  }
];

const isLogin = false;

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) => {
      return isLogin ? <Component {...props}/> : <Redirect to="/register" />
    }}
  />
);

export const mainRouters = homeRouters.map((router) => {
  const {path, component, meta, ...rest} = router;
  if (meta && meta.requireAuth) {
    return <PrivateRoute key={path} component={component} path={path} {...rest} />
  }
  return <Route key={path} component={component} path={path} {...rest} />
});
