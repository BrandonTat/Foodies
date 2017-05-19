import React from 'react';

import SearchBar from './search_bar';
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
        <button onClick={this.handleHome}>Home</button>
        < SearchBar />
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default Header;
