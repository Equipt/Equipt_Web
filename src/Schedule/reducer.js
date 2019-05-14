import types from './types.js';

const defaultState = {
  completed: [],
  active: [],
  owned: [],
  cancelled: [],
  empty: false
}

export default (state = defaultState, { type, payload }) => {

  switch(type) {
    case types.SET_SCHEDULE:

      const data = {
        completed: [],
        active: [],
        owned: [],
        cancelled: [],
        empty: false
      };

      if (!payload.length) {
        data.empty = true;
      }

      payload.reverse().forEach(rental => {
        if (rental.owned) {
          data.owned.push(rental);
        } else if (rental.isComplete) {
          data.completed.push(rental)
        } else if (rental.cancelled) {
          data.cancelled.push(rental)
        } else {
          data.active.push(rental)
        }
      });

      return data;

    case types.CLEAR_SCHEDULE:

      return defaultState;

    default:

      return state;
  }
}
