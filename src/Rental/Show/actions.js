import types from './types.js';

export const setRental = rental => ({
  type: types.SET_RENTAL,
  payload: rental
});

export const agreeToTerms = () => ({
  type: types.AGREE_TO_RENTAL_TERMS,
  payload: null
});
