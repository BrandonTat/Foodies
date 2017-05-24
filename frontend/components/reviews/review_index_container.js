import { connect } from 'react-redux';

import ReviewIndex from './review_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  null
)(ReviewIndex);
