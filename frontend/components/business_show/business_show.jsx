import React from 'react';

import BusinessShowMap from '../business_map/business_show_map';
import ReviewIndexContainer from '../reviews/review_index_container';

import Rating from 'react-rating';
import ReviewForm from '../reviews/review_form';
import Modal from 'react-modal';
import ModalStyle from '../modal_style';

const PRICES = { 1:"$", 2:"$$", 3:"$$$", 4:"$$$$"};

class BusinessShow extends React.Component{
  constructor(props) {
    super(props);

    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.clearErrors();
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    let {businessId} = this.props;
    this.props.fetchBusiness(businessId);
    this.props.fetchReviews(businessId);
  }

  render() {

    let {
      name, address, city, state,
      zip, price, phone_number, mon,
      tue, wed, thu, fri, sat, sun} = this.props.business;
    let reviews = this.props.reviews;
    let averageRating = this.props.business.averageRating;

    if (this.props.business === undefined) {
        return <h1>loading</h1>;
    } else {
      return (
        <div id="businessShow">
          <div id="businessShowUpper">
            <div id="businessInfoSection">
              <ul id="businessShowInfo">
                <li id="businessShowName">{name}</li>
                <li id="businessInfo" >
                  <Rating
                  id="businessShowReviewStars"
                  initialRate={averageRating}
                  empty="fa fa-star-o fa"
                  full="fa fa-star fa"
                  readonly/>
                  <text id="businessShowReview">{reviews.length} Reviews</text>
                </li>
                <li id="businessInfo" className="businessShowPrice">{PRICES[price]}</li>
              </ul>
            </div>

            <button id="modal" onClick={this.openModal}>Write a Review</button>
          </div>

          <div id="businessShowMid">
            <div id="businessShowCard">
              <div id="businessMap">
                <BusinessShowMap business={this.props.business} />
              </div>
              <div id="lowerCard">
                <div id="lowerCardAddress">
                  <text id="businessCardInfo" >
                    <i id="icon" className="fa fa-map-marker" aria-hidden="true"></i>
                    {address}
                  </text>
                  <text id="businessCardInfo"><i id="iconHidden" className="fa fa-map-marker" aria-hidden="true"></i> {city}, {state}, {zip}</text>
                </div>

                <text id="businessCardInfo">
                  <i id="icon" className="fa fa-phone"></i>
                  {phone_number}
                </text>
              </div>
            </div>
          </div>

          <div id="businessShowBottom">
            <ReviewIndexContainer {...this.props}/>
            <div id="businessHours">
              <h2 id="hoursHeader">Hours</h2>
              <ul id="schedule">
                <li id="week">Monday</li>
                <li id="day">{mon}</li>
                <li id="week">Tuesday</li>
                <li id="day">{tue}</li>
                <li id="week">Wednesday</li>
                <li id="day">{wed}</li>
                <li id="week">Thursday</li>
                <li id="day">{thu}</li>
                <li id="week">Friday</li>
                <li id="day">{fri}</li>
                <li id="week">Saturday</li>
                <li id="day">{sat}</li>
                <li id="week">Sunday</li>
                <li id="day">{sun}</li>
              </ul>
            </div>
          </div>


          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={ModalStyle}
            className="modal"
            contentLabel="example Modal">
            <ReviewForm {...this.props}
              closeModal={this.closeModal}/>
          </Modal>
        </div>
      );
    }
  }
}

export default BusinessShow;

// <BusinessShowMap business={this.props.business} />
