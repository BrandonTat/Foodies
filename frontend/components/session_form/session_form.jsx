import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import ErrorsContainer from '../errors/errors_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
  }

  componentWillUpdate() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.formType === "login") {
      this.props.login(user);
    } else {
      this.props.signup(user);
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>{"Become a Foodie"}</Link>;
    } else {
      return <Link to='/login'>{"Already a Foodie?"}</Link>;
    }
  }

  guestLogIn(e) {
    e.preventDefault();
    let user = { username:"guest", password:"password" };
    this.props.login(user);
  }

  render() {
    let header;
    if (this.props.formType === 'login'){
      header = "Log In";
    } else {
      header = "Become a Foodie";
    }
    return(
      <div id="session-form">
        <h1>{header}</h1>

        <div id="errors">{<ErrorsContainer />}</div>
        <form onSubmit={this.handleSubmit}>
          <div id="login-form">
            <label>Username</label>

            <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
            />

            <label>Password</label>

            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />

            <button type="submit">Submit</button>

            {this.navLink()}

            <button onClick={this.guestLogIn}>Guest Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
