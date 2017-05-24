import React from 'react';

import SearchBar from './search_bar';
import { Redirect, Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
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
        <Link to="/home">Home</Link>
        < SearchBar {...this.props}/>
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default Header;
