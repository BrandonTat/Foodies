import React from 'react';
import { Link } from 'react-router-dom';

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
        <img id="photo" src={business.image_url} />
      </li>
    );
  }
}

export default FeaturedBusiness;
