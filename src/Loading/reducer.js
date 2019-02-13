import types from './types.js';

export default (state = false, { type, payload }) => {
  switch(type) {
    case types.IS_LOADING:
      return payload;
    default:
      return state;
  }
}
