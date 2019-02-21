import types from './types.js';

const TIME_ON_PAGE = 5000;

let alertTimeout;

export const setAlert = alert => async(dispatch) => {

  alertTimeout && clearTimeout(alertTimeout);

  alertTimeout = setTimeout(() => dispatch(clearAlert()), TIME_ON_PAGE);

  dispatch({
    type: types.SET_ALERT,
    payload: alert
  });

};

export const clearAlert = () => ({
  type: types.SET_ALERT,
  payload: null
});
