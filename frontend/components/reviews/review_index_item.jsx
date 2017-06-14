import React from 'react';
import Rating from 'react-rating';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review);
  }

  render() {
    const {user, review_text, rating, photo_url} = this.props.review;
    let deleteReview;
    if (this.props.currentUser.id === this.props.review.user.id) {
      deleteReview = <button onClick={this.handleDelete}>
        Remove Review
      </button>;
    } else {
      deleteReview = <p></p>;
    }

    return(
      <ul id="review">
        <div id="reviewInfo">
          <li id="reviewRating">
            Rating: <Rating
            id="ratingStars"
            initialRate={rating}
            empty="fa fa-star-o fa"
            full="fa fa-star fa"
            readonly
            />
          </li>
          <li id="reviewUsername">{user.username}</li>
          <li id="reviewText">{review_text}</li>
        </div>

        <img id="reviewPhoto" src={photo_url}></img>
        {deleteReview}
      </ul>
    );
  }
}

export default ReviewIndexItem;
