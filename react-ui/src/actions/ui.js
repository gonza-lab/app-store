const { types } = require('../types/types');

export const toggleSidebar = () => ({
  type: types.uiToggleSidebar,
});

export const openModalLogin = () => ({
  type: types.uiOpenModalLogin,
});

export const openModalSigin = () => ({
  type: types.uiOpenModalSigin,
});

export const closeAllModal = () => ({
  type: types.uiCloseAllModal,
});

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});
