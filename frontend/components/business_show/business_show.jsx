import React from 'react';

import HeaderContainer from '../header/header_container';

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
    let {name, address, city, state, zip, price} = this.props.business;
    return (
      <div>
        <HeaderContainer {...this.props} />
        <ul>
          <li>{name}</li>
          <li>{address}, {city}, {state}, {zip}</li>
        </ul>
      </div>
    );
  }
}

export default BusinessShow;
