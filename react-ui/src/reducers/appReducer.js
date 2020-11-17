const { types } = require('../types/types');

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.appGet:
      return {
        ...state,
        apps: action.payload,
      };

    default:
      return state;
  }
};
