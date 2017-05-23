import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const fetchBusiness = id => dispatch => (
  APIUtil.fetchBusiness(id).then(business => (
    dispatch(receiveBusiness)
  ))
);

export const fetchBusinesses = () => dispatch => (
  APIUtil.fetchBusinesses().then(businesses => (
    dispatch(receiveBusinesses(businesses))
  ))
);
