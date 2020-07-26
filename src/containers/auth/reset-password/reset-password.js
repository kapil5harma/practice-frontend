import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ResetPasswordForm } from '../../../components/reset-password-form/ResetPasswordForm';
import './reset-password.scss';
import { Creators } from '../store/actions';
import { Col } from 'antd';
import AuthFormFooter from '../../../components/auth-form-footer/AuthFormFooter';

class ResetPassword extends Component {
  static propTypes = {
    resetPassword: PropTypes.func
  };

  render() {
    const { authenticateResetPassword, history } = this.props;

    return (
      <div className='ResetPassword'>
        <Col className='right-ctr'>
          <div className='main-ctr'>
            <div className='logo-ctr'>
              <img src='' alt='play-logo' />
            </div>
            <ResetPasswordForm
              authenticateResetPassword={authenticateResetPassword}
              history={history}
            ></ResetPasswordForm>
          </div>
          <AuthFormFooter></AuthFormFooter>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading
});

const mapDispatchToProps = (dispatch) => ({
  authenticateResetPassword: (payload) => dispatch(Creators.resetPassword(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResetPassword));
