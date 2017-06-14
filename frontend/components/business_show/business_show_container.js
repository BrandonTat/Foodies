import { connect } from 'react-redux';

import { fetchBusiness } from '../../actions/business_actions';
import { fetchReviews, createReview } from '../../actions/review_actions';
import { clearErrors } from '../../actions/session_actions';
import BusinessShow from './business_show';

const mapStateToProps = (state, { match }) => ({
  business:  state.business,
  businessId: parseInt(match.params.businessId),
  currentUser: state.session.currentUser,
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  createReview: (review) => dispatch(createReview(review)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
