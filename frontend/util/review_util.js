export const fetchReviews = (businessId) => {
  return $.ajax({
    method: "GET",
    url: `/api/businesses/${businessId}/reviews`
  });
};
