import React from 'react';
import { values } from 'lodash';

import BusinessIndexItem from "./business_index_item";
import HeaderContainer from '../header/header_container';

class BusinessIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    let businesses = values(this.props.businesses);
    console.log(businesses.length);
    return(
      <div>
        < HeaderContainer {...this.props} />
        {businesses.map(business => (
          <BusinessIndexItem
            business={business}
            key={business.id}
          />
        ))}
      </div>
    );
  }
}

export default BusinessIndex;
