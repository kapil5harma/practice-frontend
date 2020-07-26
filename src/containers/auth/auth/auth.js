import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Tabs } from 'antd';
import { LoginForm } from '../../../components/login-form/LoginForm';
import { SignupForm } from '../../../components/signup-form/SignupForm';
import BgImage from '../../../assets/bg.svg';
import './auth.scss';
import { Creators } from '../store/actions';
import { Col } from 'antd';
import AuthFormFooter from '../../../components/auth-form-footer/AuthFormFooter';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class Auth extends Component {
  static propTypes = {
    authenticateLogin: PropTypes.func,
    signup: PropTypes.func,
    history: PropTypes.object
  };

  render() {
    const { authenticateLogin, history, signup } = this.props;

    return (
      <div className='Auth'>
        <Col xs={0} sm={0} md={12} lg={13} xl={14} className='left-ctr'>
          <img src={BgImage} alt='bg' />
        </Col>
        <Col xs={24} sm={24} md={12} lg={11} xl={10} className='right-ctr'>
          <div className='main-ctr'>
            <h1>Get more things done with us</h1>
            <h2>Search Sourcing the world's brightest professionals for your business.</h2>
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab='Login' key='1'>
                <LoginForm authenticateLogin={authenticateLogin} history={history}></LoginForm>
              </TabPane>
              <TabPane tab='Signup' key='2'>
                <SignupForm signup={signup} history={history}></SignupForm>
              </TabPane>
            </Tabs>
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
  authenticateLogin: (payload) => dispatch(Creators.login(payload)),
  signup: (payload) => dispatch(Creators.signup(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));
