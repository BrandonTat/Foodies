import React from 'react';

const PRICES = { 1:"$", 2:"$$", 3:"$$$", 4:"$$$$"};

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleBusinessClick = this.handleBusinessClick.bind(this);
  }

  handleBusinessClick(e) {
    e.preventDefault();
    console.log(this.props.business.id);
  }

  render() {
    const { name, price, address, image_url,
          state, city, zip } = this.props.business;
    return (
      <ul id="business" onClick= {this.handleBusinessClick}>
        <li>{name}</li>
        <li>{address}, {city}, {state}, {zip}</li>
        <li>{PRICES[price]}</li>
        <img src={image_url}></img>
      </ul>
    );
  }
}

export default BusinessIndexItem;
