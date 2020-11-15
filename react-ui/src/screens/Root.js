import React from 'react';
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

import { closeAllModal } from '../actions/ui';

import './Root.scss';

export const ScreensRoot = () => {
  const dispatch = useDispatch();
  const { modalSigin, modalLogin } = useSelector((state) => state.ui);

  const handleCloseModal = () => {
    dispatch(closeAllModal());
  };

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
