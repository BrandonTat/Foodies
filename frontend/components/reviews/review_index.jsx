import React from 'react';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.reviews.length === 0) {
      return <div>loading</div>;
    } else {
      let {reviews} = this.props;
      return(
        <div id="reviewIndex">
          <h2 id="reviewHeader">Reviews</h2>
          {reviews.map(review => (
            <ReviewIndexItem
              key={review.id}
              review={review}
              {...this.props}
            />
          ))}
        </div>
      );
    }
  }
}

export default ReviewIndex;
