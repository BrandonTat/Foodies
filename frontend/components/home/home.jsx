import React from 'react';

import HeaderContainer from '../header/header';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderContainer {...this.props}/>
      </div>
    );
  }
}

export default Home;
