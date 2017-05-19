import React from 'react';

import HeaderContainer from '../header/header_container';

class BusinessIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const { businesses } = this.props;
    return(
      <div>
        < HeaderContainer {...this.props} />
      </div>
    );
  }
}

export default BusinessIndex;
