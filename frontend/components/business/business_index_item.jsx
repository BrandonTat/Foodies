import React from 'react';
import { Link } from 'react-router-dom';

const PRICES = { 1:"$", 2:"$$", 3:"$$$", 4:"$$$$"};

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleBusinessClick = this.handleBusinessClick.bind(this);
  }

  handleBusinessClick(e) {
    e.preventDefault();
    let businessId = this.props.business.id;
    this.props.history.push(`/businesses/${businessId}`);
  }

  render() {
    const { id, name, price, address, image_url,
          state, city, zip, reviews} = this.props.business;
    return (
      <div id={id}>
        <ul id="business" onClick= {this.handleBusinessClick}>
          <li>{name}</li>
          <li>{address}, {city}, {state}, {zip}</li>
          <li>{PRICES[price]}</li>
          <img src={image_url}></img>
        </ul>
      </div>
    );
  }
}

export default BusinessIndexItem;
