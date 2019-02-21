import types from './types.js';

const defaultState = {
  email: '',
  password: '',
  rememberMe: false
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types['@LOGIN/ON_CHANGE']:
      return { ...state, ...payload };
    case types['@LOGIN/HAS_ERRORS']:
      return { ...state, errors: payload };
    case types['TOGGLE_REMEMBER_ME']:
      return { ...state, rememberMe: payload };
    default:
      return state;
  }
}
