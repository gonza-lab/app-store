import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from '../reducers/appReducer';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  app: appReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
