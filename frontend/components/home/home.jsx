import React from 'react';

import { Redirect } from 'react-router-dom';

const home = () => (
  <Redirect to="/" />
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h2>Welcome, {currentUser.username}</h2>
    <button onClick={logout}>Log Out</button>
  </div>
);

const Home = ({ currentUser, logout }) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    return home();
  }
};

export default Home;
