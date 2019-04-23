import types from './types.js';

const defaultState = {
  firstname: null,
  lastname: null,
  email: null,
  phone: {
    number: null
  },
  address: {
    unit: null,
    number: null,
    street: null,
    city: null,
    state: '',
    country: 'CA',
    zip: null
  },
  currentTab: 'basic',
  isLoading: false
}

export default (state = defaultState, { type, payload }, root) => {

  switch(type) {
    case types['@PROFILE/SET_INITIAL_STATE']:
      return { ...payload, currentTab: 'basic' };
    case types['@PROFILE/ON_CHANGE']:
      const field = Object.keys(payload)[0];
      field.split('.').reduce((arr, value) => {
        if (arr[value] instanceof Object) {
          return arr[value];
        } else {
          return arr[value] = payload[field];
        }
      }, state);
      return { ...state };
    case types['@PROFILE/SET_ERRORS']:
      return { ...state, errors: payload };
    case types['@PROFILE/CLEAR_ERROR']:
      delete state.errors[ payload.field ];
      return { ...state };
    case types['@PROFILE/CHANGE_TAB']:
      return { ...state, currentTab: payload };
    case types['@PROFILE/IS_LOADING']:
      return { ...state, isLoading: payload };
    default:
      return state;
  }

}
