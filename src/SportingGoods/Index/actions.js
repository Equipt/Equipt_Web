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

  if (location && location.lat && location.lng) {
    params.aroundLatLng =  `${ location.lat }, ${ location.lng }`;
    params.aroundRadius = distance * 1000;
  }

  if (!keyword && !location) dispatch(loadingActions.showLoader(true));

  try {

    const response = await algolia.search(params);

    dispatch(setSportingGoods({ keyword, distance, location, ...response }));

  } catch (error) {

    const response = await api.get('/sporting_goods');

    dispatch(setSportingGoods(response));

  }

  dispatch(loadingActions.showLoader(false));

}

export const setSportingGoods = ({
  keyword,
  location,
  distance,
  hits,
  nbHits,
  hitsPerPage,
  page
}) => ({
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
});
