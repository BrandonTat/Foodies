import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchBusinesses } from '../../actions/business_actions';
import Home from './home';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  businesses: state.businesses
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: (params) => dispatch(fetchBusinesses(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
