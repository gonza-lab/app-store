import { types } from '../types/types';

export const uiReducer = (
  state = { isSidebarOpen: true, isModalOpen: false },
  action
) => {
  switch (action.type) {
    case types.uiToggleSidebar:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    case types.uiToggleModal:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    default:
      return state;
  }
};
