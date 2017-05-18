import React from 'react';

import { Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
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
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default Header;
