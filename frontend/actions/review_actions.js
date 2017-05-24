import * as APIUtil from "../util/review_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const fetchReviews = (businessId) => dispatch => (
  APIUtil.fetchReviews(businessId).then(reviews => (
    dispatch(receiveReviews(reviews))
  ))
);
