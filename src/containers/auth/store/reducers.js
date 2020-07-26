import { createReducer } from 'reduxsauce';
import { Types } from './actions';
console.log('Types: ', Types);

const INITIAL_STATE = {
  loading: false,
  loggedIn: false
};

// ********************************************* Login *********************************************
const loginStart = (state = INITIAL_STATE) => ({ ...state, loading: true });

const loginFailure = (state = INITIAL_STATE) => ({ ...state, loading: false });

const loginSuccess = (state = INITIAL_STATE) => ({ ...state, loading: false, loggedIn: true });

// __________________________________________________________________________________________________

// ********************************************* Signup *********************************************
const signupStart = (state = INITIAL_STATE) => ({ ...state, loading: true });

const signupFailure = (state = INITIAL_STATE) => ({ ...state, loading: false });

const signupSuccess = (state = INITIAL_STATE) => ({ ...state, loading: false, loggedIn: true });

// __________________________________________________________________________________________________

// ********************************************* Logout *********************************************
const logoutStart = (state = INITIAL_STATE) => ({ ...state, loading: true });

const logoutFailure = (state = INITIAL_STATE) => ({ ...state, loading: false });

const logoutSuccess = (state = INITIAL_STATE) => ({ ...state, loading: false, loggedIn: false });

// __________________________________________________________________________________________________

const HANDLERS = {
  [Types.LOGIN_START]: loginStart,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGIN_SUCCESS]: loginSuccess,

  [Types.SIGNUP_START]: signupStart,
  [Types.SIGNUP_FAILURE]: signupFailure,
  [Types.SIGNUP_SUCCESS]: signupSuccess,

  [Types.LOGOUT_START]: logoutStart,
  [Types.LOGOUT_FAILURE]: logoutFailure,
  [Types.LOGOUT_SUCCESS]: logoutSuccess
};

export const authReducer = createReducer(INITIAL_STATE, HANDLERS);
