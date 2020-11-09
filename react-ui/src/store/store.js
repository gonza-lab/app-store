import {
  applyMiddleware,
  /*  combineReducers ,*/ compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(() => {},
composeEnhancers(applyMiddleware(thunk)));
