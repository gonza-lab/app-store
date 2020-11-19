import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const RoutesPrivateRoute = ({
  condition,
  component: Component,
  ...propsRoute
}) => {
  return (
    <Route
      {...propsRoute}
      render={(props) =>
        condition ? <Component {...props} /> : <Redirect to="/apps" />
      }
    />
  );
};
