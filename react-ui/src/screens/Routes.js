import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { RoutesPrivateRoute } from '../components/routes/private/Route';
import { ScreensAppRoot } from './app/Root';
import { ScreensUserRoot } from './user/Root';

export const Routes = () => {
  const { isLogged } = useSelector((state) => state.auth);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('x-last-path', location.pathname);
  }, [location]);

  useEffect(() => {
    const lastPath = localStorage.getItem('x-last-path');

    if (lastPath !== '/me/apps') {
      history.push(lastPath);
    }
  }, [isLogged]);

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
