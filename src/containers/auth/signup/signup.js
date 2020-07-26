import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LoginForm } from '../../../components/login-form/LoginForm';
import LoginBgImage from '../../../assets/bg.svg';
import './signup.scss';
import { Creators } from '../store/actions';
import { Col } from 'antd';
import AuthFormFooter from '../../../components/auth-form-footer/AuthFormFooter';

class Signup extends Component {
  static propTypes = {
    login: PropTypes.func
  };

  render() {
    const { authenticateLogin, history } = this.props;

    return (
      <div className='Login'>
        <Col xs={0} sm={0} md={12} lg={14} xl={16} className='left-ctr'>
          <img src={LoginBgImage} alt='bg' />
        </Col>
        <Col xs={24} sm={24} md={12} lg={10} xl={8} className='right-ctr'>
          <div className='main-ctr'>
            <div className='logo-ctr'>
              <img src='' alt='play-logo' />
            </div>
            <LoginForm authenticateLogin={authenticateLogin} history={history}></LoginForm>
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
  authenticateLogin: (payload) => dispatch(Creators.login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
