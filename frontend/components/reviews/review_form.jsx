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
    this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  updateRating(rate) {
    this.setState({rating: rate});
  }

  navigateToBusinessShow() {
    const url = `/businesses/${this.props.business.id}`;
    this.props.history.push(url);
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
      photo_url
    };

    console.log(newReview);

    this.props.createReview(business_id, newReview);
    this.navigateToBusinessShow();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Rating</label>
        <Rating
          empty="fa fa-star-o fa-2x"
          full="fa fa-star fa-2x"
          initialRate={this.state.rating}
          stop={5}
          onChange={this.updateRating}
        />

        <label>Review</label>
        <textarea
          cols="30"
          rows="10"
          value={this.state.review_text}
          onChange={this.update("review_text")}
        />

        <input type="submit"/>
      </form>
    );
  }
}

export default ReviewForm;
