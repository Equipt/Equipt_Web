import types from './types.js';

const defaultState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  errors: {},
  terms: false
}

export default (state = defaultState, { type, payload }) => {

  switch(type) {
    case types['@SIGNUP/ON_CHANGE']:
      return { ...state, ...payload };
    case types['@SIGNUP/HAS_ERRORS']:
      return { ...state, errors: payload }
    case types['@SIGNUP/CLEAR_ERROR']:
      const errors = { ...state.errors, [payload]: [] };
      return { ...state, errors };
    case types['@SIGNUP/CLEAR_FORM']:
      return defaultState;
    case types['@SIGNUP/AGREE_TO_TERMS']:
      return { ...state, terms: true }
    default:
      return state;
  }

}
