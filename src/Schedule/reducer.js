import types from './types.js';

export default (state = [], { type, payload }) => {

  switch(type) {
    case types.FETCH_SCHEDULE:
      return payload;
    default:
      return state;
  }
}
