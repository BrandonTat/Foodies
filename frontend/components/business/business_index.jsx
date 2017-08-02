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
    const {businesses, fetchBusinesses, history} = this.props;
    let businessesArray = Object.values(businesses);
    
    return(
      <div id="mapPage">
        <div id="businesses">
          <Filters fetchBusinesses={fetchBusinesses} />

          {businessesArray.map(business => (
            <BusinessIndexItem
              business={business}
              key={business.id}
              history = {history}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default BusinessIndex;
