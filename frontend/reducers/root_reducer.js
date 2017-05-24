import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BusinessesReducer from './businesses_reducer';
import BusinessReducer from './business_reducer';
import ReviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  businesses: BusinessesReducer,
  business: BusinessReducer,
  reviews: ReviewsReducer,
  errors: ErrorsReducer
});

export default rootReducer;
