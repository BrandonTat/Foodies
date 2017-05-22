import React from 'react';

import BusinessIndexItem from "./business_index_item";
import HeaderContainer from '../header/header_container';

class BusinessIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    let businesses = Object.values(this.props.businesses);
    return(
      <div id="mapPage">
        <HeaderContainer {...this.props} />
        <div id="businesses">
          {businesses.map(business => (
            <BusinessIndexItem
              business={business}
              key={business.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BusinessIndex;
