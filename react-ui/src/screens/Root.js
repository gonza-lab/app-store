import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { UiContainer } from '../components/ui/container/Container';
import { UiNavbar } from '../components/ui/navbar/Navbar';
import { UiSidebar } from '../components/ui/sidebar/Sidebar';
import { ScreensAppRoot } from './app/Root';

import './Root.scss';

export const ScreensRoot = () => {
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
    </Router>
  );
};
