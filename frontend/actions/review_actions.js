import * as ReviewUtil from "../util/review_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const fetchReviews = (businessId) => dispatch => (
  ReviewUtil.fetchReviews(businessId).then(reviews => (
    dispatch(receiveReviews(reviews))
  ))
);

export const createReview = (businessId, review) => dispatch => (
  ReviewUtil.postReview(businessId, review).then(data => (
    dispatch(receiveReview(data))
  ))
);
