import { connect } from 'react-redux';

import { fetchBusinesses } from '../../actions/business_actions';
import BusinessIndex from './business_index';

const mapStateToProps = (state) => ({
  businesses: state.businesses
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: (params) => dispatch(fetchBusinesses(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
