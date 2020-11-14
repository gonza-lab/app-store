import React from 'react';
import { Provider } from 'react-redux';
import { ScreensRoot } from './screens/Root';
import { store } from './store/store';

import './styles/styles.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <ScreensRoot />
    </Provider>
  );
};
