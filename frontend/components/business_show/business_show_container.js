import { connect } from 'react-redux';

import BusinessShow from './business_show';

const mapStateToProps = (state, { match }) => ({
  businessId: parseInt(match.params.businessId)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  null
)(BusinessShow);
