import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UiContainer } from '../components/ui/container/Container';
import { UiNavbar } from '../components/ui/navbar/Navbar';
import { UiSidebar } from '../components/ui/sidebar/Sidebar';

export const ScreensRoot = () => {
  return (
    <Router>
      <UiNavbar brand={{ name: 'AppStore7', to: '/' }} />
      <UiContainer>
        <UiSidebar />
        <Switch>
          <Route exact path="/apps" component={() => <div>Aplicaciones</div>} />
        </Switch>
      </UiContainer>
    </Router>
  );
};
