import { RECEIVE_BUSINESSES } from '../actions/business_actions';

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    default:
      return state;
  }
};

export default BusinessesReducer;
