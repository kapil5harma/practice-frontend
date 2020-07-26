import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchUserDetails: ['payload'],
  fetchUserDetailsStart: null,
  fetchUserDetailsSuccess: ['payload'],
  fetchUserDetailsFailure: ['payload'],

  update: ['payload'],
  updateStart: null,
  updateSuccess: ['payload'],
  updateFailure: ['payload']
});

export { Types, Creators };
