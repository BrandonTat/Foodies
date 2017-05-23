import { RECEIVE_BUSINESS } from '../actions/business_actions';

const BusinessReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESS:
      return action.business;
    default:
      return state;
  }
};

export default BusinessReducer;
