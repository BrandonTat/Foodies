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
    let {
      name, address, city, state,
      zip, price, phone_number} = this.props.business;
    let reviews = this.props.reviews;

    if (this.props.business === undefined) {
        return <h1>loading</h1>;
    } else {
      return (
        <div id="businessShow">
          <HeaderContainer {...this.props} />
          <BusinessShowMap business={this.props.business} />
          <ul id="businessShowInfo">
            <li id="businessShowName">{name}</li>
            <li id="businessInfo">{address}, {city}, {state}, {zip}</li>
            <li id="businessInfo">{reviews.length} Reviews || {PRICES[price]}</li>
            <li id="businessInfo">{phone_number}</li>

              <button id="modal" onClick={this.openModal}>Post Review</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={ModalStyle}
                contentLabel="example Modal"
              >
                <ReviewForm {...this.props}
                  closeModal={this.closeModal}/>
              </Modal>
          </ul>

          <div id="infoSection">
            <ReviewIndexContainer {...this.props}/>
            <h1 id="businessHours">BusinessHours</h1>
          </div>
        </div>
      );
    }
  }
}

export default BusinessShow;
