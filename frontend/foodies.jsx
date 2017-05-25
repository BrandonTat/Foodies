import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

//REMOVE AFTER TESTING
import { signup, login, logout } from './actions/session_actions';
import { fetchBusinesses, fetchBusiness } from './actions/business_actions';
import { fetchReviews } from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //REMOVE AFTER TESTING
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchBusinesses = fetchBusinesses;
  window.fetchBusiness = fetchBusiness;
  window.fetchReviews = fetchReviews;
  // store.dispatch(fetchReviews(121)).then(console.log);

  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});

// GOOG API KEY
// AIzaSyBtYHes9Jjfhvm90H5eoxHKn7zfDbsDPWI
