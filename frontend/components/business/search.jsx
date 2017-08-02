import React from 'react';

import BusinessIndex from './business_index';
import BusinessMap from '../business_map/business_map';

const Search = ({ businesses, fetchBusinesses, history }) => (
  <div>
    <BusinessIndex
      businesses={businesses}
      fetchBusinesses={fetchBusinesses}
      history={history}
    />
    <BusinessMap
      businesses={businesses}
    />
  </div>
);

export default Search;
