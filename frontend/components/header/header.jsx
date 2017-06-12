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
        <div id="headerLinks">
          <Link className="link" id="homeLink" to="/home">Foodies</Link>
          <a id="github" href="https://github.com/BrandonTat/yelp_clone">
            <i className="fa fa-github link" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/brandon-tat-300815120/">
            <i className="fa fa-linkedin link" aria-hidden="true"></i>
          </a>
        </div>
        <SearchBar {...this.props}/>
      <button className="link" onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default Header;
