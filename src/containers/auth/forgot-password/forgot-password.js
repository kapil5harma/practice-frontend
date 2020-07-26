import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ForgotPasswordForm } from '../../../components/forgot-password-form/ForgotPasswordForm';
import ForgotPasswordBgImage from '../../../assets/bg.svg';
import './forgot-password.scss';
import { Creators } from '../store/actions';
import { Col } from 'antd';
import AuthFormFooter from '../../../components/auth-form-footer/AuthFormFooter';

class ForgotPassword extends Component {
  static propTypes = {
    forgotPassword: PropTypes.func
  };

  render() {
    const { authenticateForgotPassword, history } = this.props;

    return (
      <div className='ForgotPassword'>
        <Col xs={0} sm={0} md={12} lg={14} xl={16} className='left-ctr'>
          <img src={ForgotPasswordBgImage} alt='forgot-password-bg' />
        </Col>
        <Col xs={24} sm={24} md={12} lg={10} xl={8} className='right-ctr'>
          <div className='main-ctr'>
            <div className='logo-ctr'>
              <img src='' alt='play-logo' />
            </div>
            <ForgotPasswordForm
              authenticateForgotPassword={authenticateForgotPassword}
              history={history}
            ></ForgotPasswordForm>
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
  authenticateForgotPassword: (payload) => dispatch(Creators.forgotPassword(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ForgotPassword));
