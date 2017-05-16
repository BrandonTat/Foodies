import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  //REMOVE AFTER TESTING
  window.store = configureStore();

  ReactDOM.render(<h1>Welcome to Foodies</h1>, root);
});
