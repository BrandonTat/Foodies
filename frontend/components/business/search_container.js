import { connect } from 'react-redux';

import { fetchBusinesses } from '../../actions/business_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  businesses: state.businesses
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
