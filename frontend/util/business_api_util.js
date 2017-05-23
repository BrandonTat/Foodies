export const fetchBusiness = id => {
  $.ajax({
    method: "GET",
    url: `api/businesses/${id}`
  });
};

export const fetchBusinesses = () => {
  return $.ajax({
    method: "GET",
    url: "api/businesses",
  });
};
