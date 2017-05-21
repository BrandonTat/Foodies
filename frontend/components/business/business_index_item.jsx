import React from 'react';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleBusinessClick = this.handleBusinessClick.bind(this);
  }

  handleBusinessClick(e) {
    e.preventDefault;
    console.log(this.props.business.id);
  }

  render() {
    const { name, price, address } = this.props.business;
    return (
      <ul id="business" onClick= {this.handleBusinessClick}>
        <li>{name}</li>
        <li>{address}</li>
      </ul>
    );
  }
}

export default BusinessIndexItem;
