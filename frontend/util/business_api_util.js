export const fetchBusiness = id => {
  return $.ajax({
    method: "GET",
    url: `api/businesses/${id}`
  });
};

export const fetchBusinesses = (params) => {
  return $.ajax({
    method: "GET",
    url: "api/businesses",
    data: params
  });
};
