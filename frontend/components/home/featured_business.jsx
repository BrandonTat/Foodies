import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const PRICE = {
  1: "$",
  2: "$$",
  3: "$$$",
  4: "$$$$"
};

class FeaturedBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props);
    let {business} = this.props;
    this.props.history.push(`/businesses/${business.id}`);
  }

  render() {
    const {business} = this.props;

    return (
      <li className="photoContainer" onClick={this.handleClick} id={business.id}>
        <div id="businessCard">
          <img id="photo" src={business.image_url} />
          <div id="businessCardContent">
            <text id="title">{business.name}</text>
            <text id="featuredRating">
              <Rating
              id="reviewStars"
              initialRate={business.averageRating}
              empty="fa fa-star-o fa"
              full="fa fa-star fa"
              readonly
              />

            </text>
            <text id="numReviews">{business.numReviews} Ratings</text>
            <text id="price">{PRICE[business.price]}</text>
          </div>
        </div>
      </li>
    );
  }
}

export default FeaturedBusiness;
