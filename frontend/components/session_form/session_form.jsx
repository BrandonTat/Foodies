import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>{"Become a Foodie"}</Link>
    } else {
      return <Link to='/login'>{"Already a Foodie? Login"}</Link>
    }
  }

  render() {
    let header;
    if (this.props.formType === 'login'){
      header = <h1>Log In</h1>
    } else {
      header = <h1>Become a Foodie</h1>
    }
    return(
      <div id="session-form">
        {header}
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    );
  }
}
