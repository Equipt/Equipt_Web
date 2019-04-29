import types from './types.js';

const defaultState = {
  results: [],
  total: 0,
  keyword: '',
  place: '',
  location: {},
  distance: 5,
  page: 0
}

export default (state = defaultState, { type, payload }) => {
  switch(type) {
    case types.SET_SPORTING_GOODS:
      return payload;
    default:
      return state;
  }
}
