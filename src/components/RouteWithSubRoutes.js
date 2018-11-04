import React from 'react';
import { Route } from 'react-router-dom';

function RouteWithSubRoutes(route) {
  const { path, childrent, component: Component, ...rest } = route;
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => (
        <Component {...props} routers={childrent} />
      )}
    />
  )
}

export default RouteWithSubRoutes;
