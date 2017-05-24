import React from 'react';

class ReviewIndexItem extends React.Component {
  render() {
    const {user, review_text, rating} = this.props.review;
    return(
      <div>
        <ul id="review">
          <li>{user.username}</li>
          <li>{review_text}</li>
          <li>{rating}</li>
        </ul>
      </div>
    );
  }
}

export default ReviewIndexItem;
