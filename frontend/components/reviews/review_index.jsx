import React from 'react';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.reviews.length === 0) {
      console.log(this.props.reviews);
      return <div>loading</div>;
    } else {
      let {reviews} = this.props;
      console.log("loaded", reviews);
      return(
        <div>
          {reviews.map(review => (
            <ReviewIndexItem
              key={review.id}
              review={review}
            />
          ))}
        </div>
      );
    }
  }
}

export default ReviewIndex;
