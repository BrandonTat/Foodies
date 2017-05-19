import React from 'react';

import BusinessIndexItem from "./business_index_item";
import HeaderContainer from '../header/header_container';

class BusinessIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const { businesses } = this.props;
    console.log(businesses);
    return(
      <div>
        < HeaderContainer {...this.props} />

      </div>
    );
  }
}

export default BusinessIndex;

// {businesses.map(business => (
//   <BusinessIndexItem
//     business={business}
//     key={business.id}
//   />
// ))}
