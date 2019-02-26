import types from './types.js';

const defaultState = {
  title: '',
  images: [],
  rentals: [],
  ratings: [],
  user: {}
}

export default (state = defaultState, { type, payload }) => {
  switch(type) {
    case types.SET_SPORTING_GOOD:
      return payload;
    default:
      return state;
  }
}
