import React from 'react';
import Rating from 'react-rating';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review_text: "",
      rating: 0,
      photo_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  updateRating(rate) {
    this.setState({rating: rate});
  }

  handleSubmit(e) {
    e.preventDefault();
    let business_id = this.props.business.id;
    let user_id = this.props.currentUser.id;
    let { review_text, rating, photo_url } = this.state;

    const newReview = {
      business_id,
      user_id,
      review_text,
      rating,
      // photo_url
    };

    this.props.createReview(newReview).then(this.props.closeModal());
    this.setState({review_text:"", rating:0, photo_url:""});
  }

  render() {
    return(
      <form id="reviewForm" onSubmit={this.handleSubmit}>
        <div id="rating">
          <label>Select your rating</label>
          <Rating
            empty="fa fa-star-o fa-2x"
            full="fa fa-star fa-2x"
            initialRate={this.state.rating}
            stop={5}
            onChange={this.updateRating}
          />
        </div>

        <div id="reviewText">
          <label>Review</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="Your thoughts?"
            value={this.state.review_text}
            onChange={this.update("review_text")}
            />
        </div>

          <input type="submit" value="Post Review"/>
      </form>
    );
  }
}

export default ReviewForm;
