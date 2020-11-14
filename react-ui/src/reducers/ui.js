import { types } from '../types/types';

export const uiReducer = (state = { isSidebarOpen: true }, action) => {
  switch (action.type) {
    case types.uiToggleSidebar:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    default:
      return state;
  }
};
