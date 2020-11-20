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

    case types.authBuyApp:
      return {
        ...state,
        apps: [...state.apps, action.payload],
      };

    case types.authRemoveApp:
      return {
        ...state,
        apps: state.apps.reduce(
          (acum, curr) => (curr === action.payload ? acum : [...acum, curr]),
          []
        ),
      };

    default:
      return state;
  }
};
