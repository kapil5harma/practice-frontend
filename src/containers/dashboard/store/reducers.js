import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
  loading: false,
  userDetails: null
};

// ********************************************* Fetch User Details *********************************************
const fetchUserDetailsStart = (state = INITIAL_STATE) => ({ ...state, loading: true });

const fetchUserDetailsSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  userDetails: { ...action.payload },
  loading: false
});

const fetchUserDetailsFailure = (state = INITIAL_STATE) => ({ ...state, loading: false });
// __________________________________________________________________________________________________

// ********************************************* Fetch User Details *********************************************
const updateStart = (state = INITIAL_STATE) => ({ ...state, loading: true });

const updateSuccess = (state = INITIAL_STATE) => ({
  ...state,
  // userDetails: null,
  loading: false
});

const updateFailure = (state = INITIAL_STATE) => ({ ...state, loading: false });
// __________________________________________________________________________________________________

const HANDLERS = {
  [Types.FETCH_USER_DETAILS_START]: fetchUserDetailsStart,
  [Types.FETCH_USER_DETAILS_FAILURE]: fetchUserDetailsFailure,
  [Types.FETCH_USER_DETAILS_SUCCESS]: fetchUserDetailsSuccess,

  [Types.UPDATE_START]: updateStart,
  [Types.UPDATE_FAILURE]: updateFailure,
  [Types.UPDATE_SUCCESS]: updateSuccess
};

export const dashboardReducer = createReducer(INITIAL_STATE, HANDLERS);
