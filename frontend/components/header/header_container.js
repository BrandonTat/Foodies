import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchBusinesses } from '../../actions/business_actions';
import Header from './header';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: params => dispatch(fetchBusinesses(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
