import types from './types.js';

import { clearAlert } from '../Alert/actions.js';

export const setupForm = () => async(dispatch, getState) => {

  const session = getState()['session'];

  dispatch({
    type: types['@PROFILE/SET_INITIAL_STATE'],
    payload: session.user
  });

}

export const _bindOnChange = (field, value) => async(dispatch) => {

  await dispatch(clearAlert());

  dispatch({
    type: types['@PROFILE/ON_CHANGE'],
    payload: {
      [ field ]: value
    }
  });

};
