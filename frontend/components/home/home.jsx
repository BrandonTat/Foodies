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

          <div id="quote">
            <h1>
              You miss 100% of the shots you don't take.
            </h1>

            <h1>
              - Michael Scott
            </h1>
          </div>
          
        </div>

        <div id="lowerHomepage">
        </div>
      </div>
    );
  }
}

export default Home;
