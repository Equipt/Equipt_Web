import types from './types.js';
import { sessionService } from 'redux-react-session';
import cookies from 'browser-cookies';

import { setAlert, clearAlert } from '../Alert/actions.js';

export const login = () => async(dispatch, getState, { api, history }) => {

  const data = getState()['@form/login'];

  try {

    const user = await api.post('/session', data);

    sessionService.saveSession({ token: user.token });
    sessionService.saveUser(user);

    dispatch(clearAlert());

    history.push('/sporting_goods');

  } catch(err) {

    dispatch(setAlert(err));

  }

}

export const facebookLogin = res => async(dispatch, getState, { api, history }) => {

  try {

    const user = await api.post('/auth/facebook/callback', res);

    sessionService.saveSession({ token: user.token });
    sessionService.saveUser(user);

    dispatch(clearAlert());

    history.push('/sporting_goods');

  } catch(err) {

    dispatch(setAlert(err));

  }

}

export const toggleRememberMe = () => (dispatch, getState) => {

  const rememberMe = cookies.get('remember_me');

  dispatch({
    type: types.TOGGLE_REMEMBER_ME,
    payload: !rememberMe
  });

};

export const _bindOnChange = (field, value) => async(dispatch) => {

  await dispatch(clearAlert());

  dispatch({
    type: types['@LOGIN/ON_CHANGE'],
    payload: {
      [ field ]: value
    }
  });

};

export const _hasErrors = errors => ({
  type: types['@LOGIN/HAS_ERRORS'],
  payload: errors
})
