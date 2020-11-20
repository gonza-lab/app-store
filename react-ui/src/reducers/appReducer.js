const { types } = require('../types/types');

export const appReducer = (state = { apps: [], categories: [] }, action) => {
  switch (action.type) {
    case types.appGet:
      return {
        ...state,
        apps: action.payload,
      };

    case types.appGetCategories:
      return {
        ...state,
        categories: action.payload,
      };

    case types.appEdit:
      return {
        ...state,
        apps: state.apps.map((app) =>
          app._id === action.payload._id ? { ...app, ...action.payload } : app
        ),
      };

    case types.appRemove:
      return {
        ...state,
        apps: state.apps.reduce(
          (acum, curr) =>
            curr._id === action.payload ? acum : [...acum, curr],
          []
        ),
      };

    case types.appAdd:
      return {
        ...state,
        apps: [...state.apps, action.payload],
      };

    default:
      return state;
  }
};
