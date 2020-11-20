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

export const startLoading = (thingIsLoading) => ({
  type: types.uiStartLoading,
  payload: thingIsLoading,
});

export const finishLoading = (thingIsLoading) => ({
  type: types.uiFinishLoading,
  payload: thingIsLoading,
});

export const openModalEditApp = () => ({
  type: types.uiOpenModalEditApp,
});

export const openModalNewApp = () => ({
  type: types.uiOpenModalNewApp,
});
