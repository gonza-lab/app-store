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
