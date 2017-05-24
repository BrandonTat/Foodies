import React from 'react';

import HeaderContainer from '../header/header_container';
import BusinessShowMap from '../business_map/business_show_map';

const PRICES = { 1:"$", 2:"$$", 3:"$$$", 4:"$$$$"};

class BusinessShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let {businessId} = this.props;
    this.props.fetchBusiness(businessId);
  }

  render() {
    let {
      name, address, city, state,
      zip, price, phone_number} = this.props.business;
      if (this.props.business === undefined) {
          return (<div>Loading</div>);
      } else {
        return (
          <div id="businessShow">
            <HeaderContainer {...this.props} />
            <BusinessShowMap business={this.props.business} />
            <ul id="businessShowInfo">
              <li id="businessShowName">{name}</li>
              <li id="businessInfo">{address}, {city}, {state}, {zip}</li>
              <li id="businessInfo">{PRICES[price]}</li>
              <li id="businessInfo">{phone_number}</li>
            </ul>
          </div>
        );
      }
  }
}

export default BusinessShow;
