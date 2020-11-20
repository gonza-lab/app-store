import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RoutesPrivateRoute } from '../components/routes/private/Route';
import { ScreensAppRoot } from './app/Root';
import { ScreensUserRoot } from './user/Root';

export const Routes = () => {
  const { isLogged } = useSelector((state) => state.auth);

  return (
    <Switch>
      <RoutesPrivateRoute
        condition={isLogged}
        exact
        path="/me/apps"
        component={ScreensUserRoot}
      />
      <Route path="/apps/:category" component={ScreensAppRoot} />
      <Route path="/apps" component={ScreensAppRoot} />
      <Redirect to="/apps" />
    </Switch>
  );
};
