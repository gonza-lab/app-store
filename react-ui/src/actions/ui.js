const { types } = require('../types/types');

export const toggleSidebar = () => ({
  type: types.uiToggleSidebar,
});

export const toggleModal = () => ({
  type: types.uiToggleModal,
});
