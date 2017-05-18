import React from 'react';

import { Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleHome(e) {
    e.preventDefault();
    console.log("hello");
    return <Redirect to="/home" />;
  }

  redirectLogin() {
    return <Redirect to="/" />;
  }

  render() {
    if (!this.props.currentUser) {
      return this.redirectLogin();
    }
    return (
      <div id="header">
        <button onClick={this.handleLogout}>Log Out</button>
        <button onClick={this.handleHome}>Home</button>
      </div>
    );
  }
}

export default Header;
