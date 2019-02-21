import types from './types.js';
import * as loadingActions from '../../Loading/actions.js';

export const fetchSportingGoods = ({
  keyword = '',
  location = {},
  distance = 5,
  page = 0
} = {}) =>
  async(dispatch, getState, { api, algolia, history }) => {

  const { session } = getState();

	const userId = session.user.id;
	const pathname = history.location.pathname;
  const wantsOwned = pathname.indexOf('/owner') > -1;

  const params = {
    query: keyword,
    filters: wantsOwned ? `user_id = ${ userId }` : `user_id != ${ userId }`
  };

  // Set pagination if no search
  // if (!keyword.length && !location) {
  //   params.hitsPerPage = perPage;
  //   params.page = page;
  // }

  if (location && location.lat && location.lng) {
    params.aroundLatLng =  `${ location.lat }, ${ location.lng }`;
    params.aroundRadius = distance * 1000;
  }

  if (!keyword && !location) dispatch(loadingActions.showLoader(true));

  const { hits, nbHits, hitsPerPage } = await algolia.search(params);

  await dispatch({
    type: types.SET_SPORTING_GOODS,
    payload: {
      keyword,
      location,
      distance,
      results: hits,
      total: nbHits,
      totalPerPage: hitsPerPage,
      page
    }
  })

  dispatch(loadingActions.showLoader(false));

}

export const changedPlace = place => async(dispatch, getState) => {

}
