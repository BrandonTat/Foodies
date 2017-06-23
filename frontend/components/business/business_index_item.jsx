import React from 'react';
import Rating from 'react-rating';
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
    let averageRating = this.props.business.averageRating;

    return (
      <div id={id}>
        <ul id="business" onClick= {this.handleBusinessClick}>
          <li id="businessName">{name}</li>
          <li>
            <text id="featuredRating">
              Rating:
              <Rating
                id="businessShowReviewStars"
                initialRate={averageRating}
                empty="fa fa-star-o fa"
                full="fa fa-star fa"
                readonly/>
            </text>
          </li>
          <li>{address}</li>
          <li>{city}, {state}, {zip}</li>
          <li id="businessMapPrice">{PRICES[price]}</li>
          <li id="businessIndexPhoto">
            <img id="businessIndexPhoto" src={image_url}></img>
          </li>
        </ul>
      </div>
    );
  }
}

export default BusinessIndexItem;
