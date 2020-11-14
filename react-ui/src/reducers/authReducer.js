const { types } = require('../types/types');

export const authReducer = (state = { isLogged: false, name: '' }, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        isLogged: true,
      };

    case types.authLogout:
      return {
        isLogged: false,
      };

    default:
      return state;
  }
};
