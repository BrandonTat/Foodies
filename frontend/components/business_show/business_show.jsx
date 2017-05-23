import React from 'react';

import HeaderContainer from '../header/header_container';
import BusinessMap from '../business_map/business_map';

const PRICES = { 1:"$", 2:"$$", 3:"$$$", 4:"$$$$"};

class BusinessShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {businessId} = this.props;
    this.props.fetchBusiness(businessId);
  }

  render() {
    console.log(this.props.business);
    let {
      name, address, city, state,
      zip, price, phone_number} = this.props.business;
    return (
      <div id="businessShow">
        <HeaderContainer {...this.props} />
        <ul id="businessShowInfo">
          <li>{name}</li>
          <li>{address}, {city}, {state}, {zip}</li>
          <li>{PRICES[price]}</li>
          <li>{phone_number}</li>
        </ul>
      </div>
    );
  }
}

export default BusinessShow;
