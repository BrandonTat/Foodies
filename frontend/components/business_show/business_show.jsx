import React from 'react';

import HeaderContainer from '../header/header_container';
import BusinessShowMap from '../business_map/business_show_map';
import ReviewIndexContainer from '../reviews/review_index_container';

const PRICES = { 1:"$", 2:"$$", 3:"$$$", 4:"$$$$"};

class BusinessShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let {businessId} = this.props;
    this.props.fetchBusiness(businessId);
    this.props.fetchReviews(businessId);
  }

  render() {
    let {
      name, address, city, state,
      zip, price, phone_number} = this.props.business;
      if (this.props.business === undefined) {
          return <h1>loading</h1>;
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
            <h2>Reviews</h2>
            <ReviewIndexContainer reviews={this.props.reviews}/>
          </div>
        );
      }
  }
}

export default BusinessShow;
