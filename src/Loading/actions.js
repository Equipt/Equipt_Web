import types from './types.js';

export const showLoader = isLoading => {
  return {
    type: types.IS_LOADING,
    payload: isLoading
  }
}
