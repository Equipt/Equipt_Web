import types from './types.js';

const defaultState = {
  results: [],
  total: 0,
  keyword: ''
}

export default (state = defaultState, { type, payload }) => {
  switch(type) {
    case types.SET_SPORTING_GOODS:
      return {
        ...state,
        results: payload.sporting_goods,
        total: payload.total
      }
    case types.SEARCH_CHANGED:
      return { ...state, keyword: payload };
    default:
      return state;
  }
}
