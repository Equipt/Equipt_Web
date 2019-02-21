import types from './types.js';

const defaultState = {
  isOpen: false,
  Component: null
};

export default (state = defaultState, { type, payload }) => {

  switch(type) {
    case types.OPEN_MODAL:
      return payload;
    case types.CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }

}
