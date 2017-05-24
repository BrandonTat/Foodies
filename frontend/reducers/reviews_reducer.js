import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/review_actions";

const ReviewsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return [action.review, ...state];
    default:
      return state;
  }
};

export default ReviewsReducer;
