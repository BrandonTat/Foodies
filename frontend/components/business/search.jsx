import React from 'react';

import BusinessIndex from './business_index';
import BusinessMap from '../business_map/business_map';

const Search = (props) => (
  <div>
    < BusinessIndex {...props} />
    < BusinessMap />
  </div>
);

export default Search;
