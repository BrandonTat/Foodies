import React from 'react';

import HeaderContainer from '../header/header_container';
import BusinessShowMap from '../business_map/business_show_map';
import ReviewIndexContainer from '../reviews/review_index_container';

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
    console.log(this.props);
    let {
      name, address, city, state,
      zip, price, phone_number, mon,
      tue, wed, thu, fri, sat, sun} = this.props.business;
    let reviews = this.props.reviews;

    if (this.props.business === undefined) {
        return <h1>loading</h1>;
    } else {
      return (
        <div id="businessShow">
          <HeaderContainer {...this.props} />
          <BusinessShowMap business={this.props.business} />
          <div id="businessShowUpper">
            <ul id="businessShowInfo">

              <div id="upperBusinessInfo">
                <li id="businessShowName">{name}</li>
                <li id="businessInfo">{address}</li>
                <li id="businessInfo">{city}, {state}, {zip}</li>
                <li id="businessInfo">{reviews.length} Reviews || {PRICES[price]}</li>
                <li id="businessInfo">{phone_number}</li>
              </div>

              <div id="half">
                <button id="modal" onClick={this.openModal}>Write a Review</button>
              </div>
            </ul>
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
