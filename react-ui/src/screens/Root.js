import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

import { UiContainer } from '../components/ui/container/Container';
import { UiNavbar } from '../components/ui/navbar/Navbar';
import { UiSidebar } from '../components/ui/sidebar/Sidebar';
import { UiModal } from '../components/ui/modal/Modal';

import { AuthLoginForm } from '../components/auth/login/Form';
import { AuthSiginForm } from '../components/auth/sigin/Form';

import { ScreensAppRoot } from './app/Root';

import { login } from '../actions/auth';
import { closeAllModal } from '../actions/ui';

import './Root.scss';
import { renewToken } from '../helpers/renewToken';
import { startGetApps, startGetCategories } from '../actions/app';
import { ScreensUserRoot } from './user/Root';
import { RoutesPrivateRoute } from '../components/routes/private/Route';

TopBarProgress.config({
  autoRun: false,
  barThickness: 5,
  barColors: {
    0: 'rgba(26,  188, 156, .7)',
    '.3': 'rgba(41,  128, 185, .7)',
    '1.0': 'rgba(231, 76,  60,  .7)',
  },
  shadowBlur: 5,
  shadowColor: 'rgba(0, 0, 0, .5)',
  className: 'topbar',
});

export const ScreensRoot = () => {
  const dispatch = useDispatch();
  const { modalSigin, modalLogin, isLoading } = useSelector(
    (state) => state.ui
  );
  const { isLogged } = useSelector((state) => state.auth);

  const handleCloseModal = () => {
    dispatch(closeAllModal());
  };

  useEffect(() => {
    (async () => {
      const res = await renewToken();
      console.log(res);

      if (res.ok) {
        localStorage.setItem('x-token', res.token);
        dispatch(
          login({
            _id: res._id,
            name: res.name,
            isDev: res.isDev,
            apps: res.apps,
          })
        );
      }
    })();

    dispatch(startGetApps());
    dispatch(startGetCategories());
  }, []);

  return (
    <Router>
      {Boolean(isLoading) && <TopBarProgress />}
      <UiNavbar brand={{ name: 'AppStore7', to: '/' }} />
      <UiContainer>
        <UiSidebar />
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
      </UiContainer>
      <UiModal
        isOpen={modalLogin.open || modalSigin.open}
        onRequestClose={handleCloseModal}
      >
        {modalSigin.show ? <AuthSiginForm /> : <AuthLoginForm />}
      </UiModal>
    </Router>
  );
};
