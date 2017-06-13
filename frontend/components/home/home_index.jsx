import React from 'react';
import FeaturedBusiness from './featured_business';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    let featured = Object.values(this.props.businesses);
    if (featured.length !== 0) {
      featured = featured.slice(0, 9);
    }

    return (
      <ul id="popularPhotos">
        {featured.map(business =>
          <FeaturedBusiness key={business.id} business={business} {...this.props}/>
        )}
      </ul>
    );
  }
}

export default HomeIndex;
