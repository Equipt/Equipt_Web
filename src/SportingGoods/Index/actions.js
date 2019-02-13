import types from './types.js';
import * as loadingActions from '../../Loading/actions.js';

export const fetchSportingGoods = () => async(dispatch, getState, { api }) => {

  dispatch(loadingActions.showLoader(true));

  const sportingGoods = await api.get('/sporting_goods');

  await dispatch({
    type: types.SET_SPORTING_GOODS,
    payload: sportingGoods
  })

  await dispatch(loadingActions.showLoader(false));

}

export const changedPlace = place => async(dispatch, getState) => {

}

export const changedSearch = keyword => async(dispatch, getState, { algolia }) => {

  const { session } = getState();

  debugger;

  const params = {
    query: keyword,
    // filters: wantsOwned ? `user_id = ${ userId }` : `user_id != ${ userId }`
  };

  try {

    const { hits, nbHits, nbPages, hitsPerPage } = await algolia.search(params);

    await dispatch({
      type: types.SET_SPORTING_GOODS,
      payload: {
        result: hits
      }
    })

  } catch (err) {

  }

}
