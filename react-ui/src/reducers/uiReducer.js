import { types } from '../types/types';

export const uiReducer = (
  state = {
    isSidebarOpen: true,
    modalLogin: {
      open: false,
      show: false,
    },
    modalSigin: {
      open: false,
      show: false,
    },
    modalEditApp: {
      open: false,
      show: false,
    },
    modalNewApp: {
      open: false,
      show: false,
    },
    thingsIsLoading: [],
  },
  action
) => {
  switch (action.type) {
    case types.uiToggleSidebar:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    case types.uiOpenModalLogin:
      return {
        ...state,
        modalLogin: { open: true, show: true },
        modalSigin: { open: false, show: false },
      };

    case types.uiOpenModalSigin:
      return {
        ...state,
        modalLogin: { open: false, show: false },
        modalSigin: { open: true, show: true },
      };

    case types.uiOpenModalEditApp:
      return {
        ...state,
        modalEditApp: { open: true, show: true },
      };

    case types.uiOpenModalNewApp:
      return {
        ...state,
        modalNewApp: { open: true, show: true },
      };

    case types.uiCloseAllModal:
      return {
        ...state,
        modalSigin: { ...state.modalSigin, open: false },
        modalLogin: { ...state.modalLogin, open: false },
        modalEditApp: { ...state.modalEditApp, open: false },
        modalNewApp: { ...state.modalNewApp, open: false },
      };

    case types.uiStartLoading:
      return {
        ...state,
        thingsIsLoading: [...state.thingsIsLoading, action.payload],
      };

    case types.uiFinishLoading:
      return {
        ...state,
        thingsIsLoading: state.thingsIsLoading.reduce(
          (acum, curr) => (curr === action.payload ? acum : [...acum, curr]),
          []
        ),
      };

    default:
      return state;
  }
};
