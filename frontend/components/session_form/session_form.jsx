import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

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
      header = <h1>Log In</h1>;
    } else {
      header = <h1>Become a Foodie</h1>;
    }
    return(
      <div id="session-form">
        {header}
        <form onSubmit={this.handleSubmit}>
          <div id="login-form">
            <br/>
          <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>

            <br/>

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>

            <br/>
            <input type="submit" value="Submit" />
            <br />

            {this.navLink()}
            <br />

            <button onClick={this.guestLogIn}>Guest Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

// <button onClick={this.guestLogIn()}>Guest Log In</button>
