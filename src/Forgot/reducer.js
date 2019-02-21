import types from './types.js';

export default (state = {}, { type, payload }) => {
  
  switch(type) {
    case types['@FORGOT/UPDATED_EMAIL']:
      return { ...state, email: payload };
    default:
      return state;
  }

}
