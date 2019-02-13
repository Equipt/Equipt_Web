import types from './types.js';

export default (state = null, { type, payload }) => {
  switch(type) {
    case types.SET_ALERT:
      return payload;
    default:
      return state;
  }
}
