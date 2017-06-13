import React from 'react';
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
            <text>{business.address}, {business.city}</text>
            <text>{PRICE[business.price]}</text>
          </div>
        </div>
      </li>
    );
  }
}

export default FeaturedBusiness;
