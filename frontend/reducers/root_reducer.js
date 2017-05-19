import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BusinessesReducer from './businesses_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  businesses: BusinessesReducer,
  errors: ErrorsReducer
});

export default rootReducer;
