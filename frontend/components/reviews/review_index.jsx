import React from 'react';

import ReviewIndexItem from './review_index_item';
import ReviewForm from './review_form';

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
        <div>
          <ReviewForm {...this.props}/>
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
