import types from './types.js';

const defaultState = {
  email: '',
  password: ''
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types['@LOGIN/ON_CHANGE']:
      return { ...state, ...payload };
    case types['@LOGIN/HAS_ERRORS']:
      return { ...state, errors: payload }
    default:
      return state;
  }
}
