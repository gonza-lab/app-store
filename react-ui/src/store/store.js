import {
  applyMiddleware,
  combineReducers,
  /*  combineReducers ,*/ compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/ui';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  ui: uiReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
