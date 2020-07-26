import React from 'react';
import Cookie from 'js-cookie';
import { Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Auth } from './containers/auth';
import Dashboard from './containers/dashboard/dashboard';
import ForgotPassword from './containers/auth/forgot-password/forgot-password';
import ResetPassword from './containers/auth/reset-password/reset-password';

class App extends React.Component {
  render() {
    const token = Cookie.get('token');

    return (
      <div className='App'>
        {!token && (
          <Switch>
            <Route path='/auth' exact component={Auth} />
            {/* <Route path='/forgot-password' exact component={ForgotPassword} />
            <Route path='/reset-password' exact component={ResetPassword} /> */}
            <Redirect to='/auth' />
          </Switch>
        )}
        {token && (
          <Switch>
            <Route path='/profile' exact component={Dashboard} />
            <Redirect to='/profile' />
          </Switch>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ loading: state.auth.loading });

export default connect(mapStateToProps)(App);
