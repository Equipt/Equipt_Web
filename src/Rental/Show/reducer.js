import types from './types.js';

const defaultState = {
  isChecked: false
}

export default (state = defaultState, { type, payload }) => {

  switch(type) {
    case types.SET_RENTAL:
      return payload;
    case types.AGREE_TO_RENTAL_TERMS:
      return { ...state, agreedToTerms: true }
    default:
      return state;
  }

}
