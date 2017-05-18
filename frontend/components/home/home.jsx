import React from 'react';

import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  redirectHome() {
    return <Redirect to="/" />;
  }

  render() {
    if (!this.props.currentUser) {
      return this.redirectHome();
    }

    return (
      <div>
        <h1>{this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default Home;
