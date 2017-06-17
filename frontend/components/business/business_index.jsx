import React from 'react';

import BusinessIndexItem from './business_index_item';
import Loading from '../loading';
import Filters from './filters';

const PRICES = { 1:'$', 2:'$$', 3:'$$$', 4:'$$$$'};

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let businesses = Object.values(this.props.businesses);
    return(
      <div id="mapPage">
        <div id="businesses">
          <Filters {...this.props} />
          {businesses.map(business => (
            <BusinessIndexItem
              business={business}
              key={business.id}
              history = {this.props.history}
              />
          ))}
        </div>
      </div>
    );
  }
}


export default BusinessIndex;
