import React from 'react';
import Rating from 'react-rating';

class ReviewIndexItem extends React.Component {
  render() {
    const {user, review_text, rating} = this.props.review;
    return(
      <div id="reviewItems">
        <ul id="review">
          <Rating
            initialRate={rating}
            empty="fa fa-star-o fa-2x"
            full="fa fa-star fa-2x"
            readonly
            />
          <li id="reviewText">{review_text}</li>
          <li id="username"> - {user.username}</li>
        </ul>
      </div>
    );
  }
}

export default ReviewIndexItem;
