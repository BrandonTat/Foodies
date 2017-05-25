import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { deleteReview } from '../../actions/review_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteReview: review => dispatch(deleteReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
