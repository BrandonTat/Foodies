import React from 'react';

import HeaderContainer from '../header/header';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="homepage">
        <HeaderContainer {...this.props}/>
        <div id="upperHomepage">
        </div>

        <div id="lowerHomepage">
          <h1>hello</h1>
        </div>
      </div>
    );
  }
}

export default Home;
