import { combineReducers } from 'redux';
import { authReducer } from '../containers/auth/store';
import { dashboardReducer } from '../containers/dashboard/store';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer
});

export default rootReducer;
