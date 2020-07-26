import { put, takeLatest } from 'redux-saga/effects';
import { Types, Creators } from './actions';
import { AXIOS_INSTANCE, apiEndpoints } from '../../../config/config';
import { notification } from 'antd';
import { isArray } from 'lodash';
import Cookie from 'js-cookie';

// ********************************************* Login Saga *********************************************
function* loginSaga(action) {
  try {
    yield put(Creators.loginStart());

    const {
      payload: { email, password }
    } = action;

    const url = yield `${apiEndpoints.login}`;
    const res = yield AXIOS_INSTANCE.post(url, { email, password });

    if (res && res.status === 201) {
      const token = res.data.accessToken;
      yield Cookie.set('token', token);
      AXIOS_INSTANCE.defaults.headers.Authorization = yield `Bearer ${token}`;
      yield put(Creators.loginSuccess());
    } else {
      throw res;
    }
  } catch (err) {
    yield put(Creators.loginFailure(err.response));

    if (!err.response) {
      notification.error({
        message: `Something went wrong`,
        duration: 2
      });
    }
    if (err.response) {
      const { message, error } = err.response.data;

      if (isArray(message)) {
        message.map((msg) => {
          const x = Object.keys(msg.constraints).map((item, index) => `${index + 1}. ${msg.constraints[item]}`);

          notification.error({
            message: `Error in ${msg.property}`,
            description: `${x.join('\n')}`,
            duration: 2
          });

          return null;
        });
      } else {
        notification.error({
          message: `${error}`,
          description: `${message}`,
          duration: 2
        });
      }
    }
  }
}
// ______________________________________________________________________________________________________

// ********************************************* Signup Saga *********************************************
function* signupSaga(action) {
  console.log('action: ', action);
  try {
    yield put(Creators.signupStart());

    const {
      payload: { email, password, history, name }
    } = action;
    console.log('action: ', action);

    const url = yield `${apiEndpoints.signup}`;
    const res = yield AXIOS_INSTANCE.post(url, { name, email, password });

    if (res && res.status === 201) {
      yield put(Creators.signupSuccess());
      history.push('/auth');
      notification.success({
        message: `Successfully Registered`,
        description: `Login to continue`,
        duration: 4
      });
    } else {
      throw res;
    }
  } catch (err) {
    yield put(Creators.signupFailure(err.response));

    if (!err.response) {
      notification.error({
        message: `Something went wrong`,
        duration: 2
      });
    }
    if (err.response) {
      const { message, error } = err.response.data;

      if (isArray(message)) {
        message.map((msg) => {
          const x = Object.keys(msg.constraints).map((item, index) => `${index + 1}. ${msg.constraints[item]}`);

          notification.error({
            message: `Error in ${msg.property}`,
            description: `${x.join('\n')}`,
            duration: 2
          });

          return null;
        });
      } else {
        notification.error({
          message: `${error}`,
          description: `${message}`,
          duration: 2
        });
      }
    }
  }
}
// ______________________________________________________________________________________________________

// ********************************************* Logout Saga *********************************************
function* logoutSaga() {
  try {
    yield put(Creators.logoutStart());

    const url = yield `${apiEndpoints.logout}`;
    const res = yield AXIOS_INSTANCE.post(url);

    if (res && res.status === 200) {
      yield Cookie.set('token', '');
      AXIOS_INSTANCE.defaults.headers.Authorization = yield `You're not logged!`;
      yield put(Creators.logoutSuccess());
    } else {
      throw res;
    }
  } catch (err) {
    yield put(Creators.logoutFailure(err.response));

    if (!err.response) {
      notification.error({
        message: `Something went wrong`,
        duration: 2
      });
    }
    if (err.response) {
      const { message, error } = err.response.data;

      if (isArray(message)) {
        message.map((msg) => {
          const x = Object.keys(msg.constraints).map((item, index) => `${index + 1}. ${msg.constraints[item]}`);

          notification.error({
            message: `Error in ${msg.property}`,
            description: `${x.join('\n')}`,
            duration: 2
          });

          return null;
        });
      } else {
        notification.error({
          message: `${error}`,
          description: `${message}`,
          duration: 2
        });
      }
    }
  }
}
// ______________________________________________________________________________________________________

export const watchAuth = [
  takeLatest(Types.LOGIN, loginSaga),
  takeLatest(Types.SIGNUP, signupSaga),
  takeLatest(Types.LOGOUT, logoutSaga)
];
