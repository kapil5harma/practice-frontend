import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './dashboard.scss';
import { Button, Col } from 'antd';
import BgImage from '../../assets/bg.svg';
import { Creators } from './store';
import { Tabs } from 'antd';
import AuthFormFooter from '../../components/auth-form-footer/AuthFormFooter';
import { ProfileForm } from '../../components/profile/ProfileForm';

const { TabPane } = Tabs;

class Dashboard extends Component {
  static propTypes = { history: PropTypes.object, fetchUserDetails: PropTypes.func };

  componentDidMount() {
    const { fetchUserDetails } = this.props;
    fetchUserDetails();
  }

  render() {
    const { history, userDetails, loading, update } = this.props;

    return (
      <div className='Dashboard'>
        <Col xs={0} sm={0} md={12} lg={13} xl={14} className='left-ctr'>
          <img src={BgImage} alt='bg' />
        </Col>
        <Col xs={24} sm={24} md={12} lg={11} xl={10} className='right-ctr'>
          <div className='main-ctr'>
            <h1>Hello {userDetails?.username || 'User'}!</h1>
            <h2>You can update your profile here.</h2>
            <ProfileForm
              update={update}
              history={history}
              username={userDetails?.username}
              email={userDetails?.email}
            ></ProfileForm>
          </div>
          <AuthFormFooter type='profile'></AuthFormFooter>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ loading: state.dashboard.loading, userDetails: state.dashboard.userDetails });

const mapDispatchToProps = (dispatch) => ({
  fetchUserDetails: (payload) => dispatch(Creators.fetchUserDetails(payload)),
  update: (payload) => dispatch(Creators.update(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));
