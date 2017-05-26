import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchBusinesses } from '../../actions/business_actions';
import Home from './home';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: (params) => dispatch(fetchBusinesses(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
