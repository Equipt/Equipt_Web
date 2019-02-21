import types from './types.js';

export const openModal = component => ({
  type: types.OPEN_MODAL,
  payload: {
    Component: component,
    isOpen: true
  }
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
  payload: null
})
