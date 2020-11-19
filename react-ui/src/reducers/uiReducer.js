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
    isLoading: 0,
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

    case types.uiCloseAllModal:
      return {
        ...state,
        modalSigin: { ...state.modalSigin, open: false },
        modalLogin: { ...state.modalLogin, open: false },
      };

    case types.uiStartLoading:
      return {
        ...state,
        isLoading: state.isLoading + 1,
      };

    case types.uiFinishLoading:
      return {
        ...state,
        isLoading: state.isLoading - 1,
      };

    default:
      return state;
  }
};
