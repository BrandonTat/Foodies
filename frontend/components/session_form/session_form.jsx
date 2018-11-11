import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import ErrorsContainer from '../errors/errors_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
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
    let header, submit;

    if (this.props.formType === 'login'){
      header = submit = "Log In";
    } else {
      header = "Become a Foodie";
      submit = "Sign Up";
    }

    return(
      <div className="login-page">
        <div className="welcome-header">
          <h1 className="website-name">Foodies</h1>
          <h2 className="motto">Never get hangry again</h2>
        </div>

        <div className="session-form">
          <h1>{header}</h1>

          <div className="login-errors-containter">{<ErrorsContainer />}</div>

          <form onSubmit={this.handleSubmit}>
            <div className="login-form">

              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
              />

              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
              />

              <div className="login-buttons">
                <button type="submit">{submit}</button>
                {this.navLink()}
                <button onClick={this.guestLogIn}>Guest Log In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
