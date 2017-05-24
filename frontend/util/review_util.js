export const fetchReviews = (businessId) => {
  return $.ajax({
    method: "GET",
    url: `/api/businesses/${businessId}/reviews`
  });
};

export const postReview = (businessId, review) => {
  return $.ajax({
    method: "POST",
    url: `/api/businesses/${businessId}/reviews`,
    data: {review}
  });
};

export const deleteReview = (businessId, reviewId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/businesses/${businessId}/reviews/${reviewId}`
  });
};
