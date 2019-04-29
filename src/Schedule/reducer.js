import types from './types.js';

const defaultState = {
  completed: [],
  active: [],
  owned: [],
  empty: false
}

export default (state = defaultState, { type, payload }) => {

  switch(type) {
    case types.FETCH_SCHEDULE:

      const data = { ...defaultState };

      if (!payload.length) {
        data.empty = true;
      }

      payload.reverse().forEach(rental => {
        if (rental.owned && !rental.isComplete) return data.owned.push(rental);
        rental.isComplete ? data.completed.push(rental) : data.active.push(rental)
      });

      return data;

    default:
      return state;
  }
}
