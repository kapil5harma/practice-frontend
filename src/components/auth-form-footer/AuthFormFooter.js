import React from 'react';
import './AuthFormFooter.scss';
import { AXIOS_INSTANCE } from '../../config/config';
import { withRouter } from 'react-router';
import Cookie from 'js-cookie';

const AuthFormFooter = ({ type, history }) => {
  const logout = () => {
    AXIOS_INSTANCE.defaults.headers.Authorization = null;
    Cookie.remove('token');
    // history.replace('/auth');
    window.location.reload();
  };

  if (type === 'profile') {
    return (
      <div className='AuthFormFooter footer-ctr'>
        <span className='pointer' onClick={() => logout()}>
          Logout
        </span>
      </div>
    );
  }
  return (
    <div className='AuthFormFooter footer-ctr'>
      <span className='pointer'>Or login with</span>
      <span className='dots'> • </span>
      <span className='pointer'>Google</span>
      <span className='dots'> • </span>
      <span className='pointer'>Facebook</span>
      <span className='dots'> • </span>
      <span className='pointer'>Twitter</span>
    </div>
  );
};

export default withRouter(AuthFormFooter);
