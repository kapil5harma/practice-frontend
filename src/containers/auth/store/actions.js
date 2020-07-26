import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  signup: ['payload'],
  signupStart: null,
  signupSuccess: ['payload'],
  signupFailure: ['payload'],

  login: ['payload'],
  loginStart: null,
  loginSuccess: ['payload'],
  loginFailure: ['payload'],

  logout: ['payload'],
  logoutStart: null,
  logoutSuccess: ['payload'],
  logoutFailure: ['payload'],

  forgotPassword: ['payload'],
  forgotPasswordStart: null,
  forgotPasswordSuccess: ['payload'],
  forgotPasswordFailure: ['payload'],

  resetPassword: ['payload'],
  resetPasswordStart: null,
  resetPasswordSuccess: ['payload'],
  resetPasswordFailure: ['payload'],

  changePassword: ['payload'],
  changePasswordStart: null,
  changePasswordSuccess: ['payload'],
  changePasswordFailure: ['payload']
});

export { Types, Creators };
