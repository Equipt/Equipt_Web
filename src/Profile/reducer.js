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
    state: null,
    country: 'CA',
    zip: null
  }
}

export default (state = defaultState, { type, payload }, root) => {

  switch(type) {
    case types['@PROFILE/SET_INITIAL_STATE']:
      return payload;
    case types['@PROFILE/ON_CHANGE']:
      const field = Object.keys(payload)[0];
      field.split('.').reduce((arr, value) => {
        if (arr[value] instanceof Object) {
          return arr[value];
        } else {
          arr[value] = payload[field];
        }
      }, state);
      return { ...state };
    case types['@PROFILE/HAS_ERRORS']:
      return { ...state, errors: payload };
    default:
      return state;
  }

}
