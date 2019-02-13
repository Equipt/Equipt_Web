import types from './types.js';
import { sessionService } from 'redux-react-session';

import * as alertActions from '../Alert/actions.js';

export const login = () => async(dispatch, getState, { api, history }) => {

  const data = getState()['@form/login'];

  try {

    const user = await api.post('/session', data);

    sessionService.saveSession({ token: user.token });
    sessionService.saveUser(user);

    dispatch(alertActions.clearAlert());

    history.push('/sporting_goods');

  } catch(err) {

    dispatch(alertActions.setAlert(err));

  }

}

export const facebookLogin = res => async(dispatch, getState, { api, history }) => {

  try {

    const user = await api.post('/auth/facebook/callback', res);

    sessionService.saveSession({ token: user.token });
    sessionService.saveUser(user);

    dispatch(alertActions.clearAlert());

    history.push('/sporting_goods');

  } catch(err) {

    dispatch(alertActions.setAlert(err));

  }

}

export const _bindOnChange = (field, value) => async(dispatch) => {

  await dispatch(alertActions.clearAlert());

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
