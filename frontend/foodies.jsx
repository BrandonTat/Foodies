import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//REMOVE AFTER TESTING
import { signup, login, logout } from './actions/session_actions';

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

  ReactDOM.render(<Root store={ store }/>, root);
});
