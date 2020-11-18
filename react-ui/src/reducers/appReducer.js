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

    default:
      return state;
  }
};
