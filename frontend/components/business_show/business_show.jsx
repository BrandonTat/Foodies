import React from 'react';

import HeaderContainer from '../header/header_container';

class BusinessShow extends React.Component{
  render() {
    console.log("insideBusinessShow");
    return (
      <div>
        <HeaderContainer {...this.props} />
        <h1>Business Show Page</h1>
      </div>
    );
  }
}

export default BusinessShow;
