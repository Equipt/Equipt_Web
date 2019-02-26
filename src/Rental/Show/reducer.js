import types from './types.js';

export default (state = {}, { type, payload }) => {

  switch(type) {
    case types.SET_RENTAL:
      return payload;
    case types.AGREE_TO_RENTAL_TERMS:
      return { ...state, agreedToTerms: true }
    default:
      return state;
  }

}
