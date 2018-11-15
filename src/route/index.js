import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Home from '../views/Home/';
import Login from '../views/Authe/Login';
import Register from '../views/Authe/Register';
import Profile from '../views/Profile';
import Setting from '../views/Setting';
import ArticleEditor from '../views/ArticleEditor';
import ArticleDetail from '../views/ArticleDetail';
import RouteWithSubRoutes from '../components/RouteWithSubRoutes';
import ArticlesFeed from '../views/Home/ArticlesFeed';
import ArticlesGlobal from '../views/Home/ArticlesGlobal';
import articlesWithParams from '../components/ArticlesWithParams';
import Auth from '../components/Auth';

const homeRouters = [
  {
    path: '/',
    component: Home,
    exact: true,
    childrent: [
      {
        name: 'Home',
        path: '/',
        component: articlesWithParams(ArticlesGlobal),
        exact: true
      },
      {
        name: 'Feed',
        path: '/feed',
        component: articlesWithParams(ArticlesFeed)
      },
    ]
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

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) => {
      return <Auth
        renderLoggedIn={() => (
          <Component {...props}/>
        )}
        renderLoggedOut={() => (
          <Redirect to="/register" />
        )}
      />
    }}
  />
);

export const mainRouters = homeRouters.map((router) => {
  const {path, component, meta, ...rest} = router;
  if (meta && meta.requireAuth) {
    return <PrivateRoute key={path} component={component} path={path} {...rest} />
  }
  return <RouteWithSubRoutes key={path} {...router} />
});
