import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

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

export const ScreensRoot = () => {
  const dispatch = useDispatch();
  const { modalSigin, modalLogin } = useSelector((state) => state.ui);

  const handleCloseModal = () => {
    dispatch(closeAllModal());
  };

  useEffect(() => {
    const checkToken = async () => {
      const res = await renewToken();

      if (res.ok) {
        localStorage.setItem('x-token', res.token);
        dispatch(login({ _id: res._id, name: res.name }));
      }
    };

    checkToken();
  }, []);

  return (
    <Router>
      <UiNavbar brand={{ name: 'AppStore7', to: '/' }} />
      <UiContainer>
        <UiSidebar />
        <Switch>
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
