import { put, takeLatest } from 'redux-saga/effects';
import { Types, Creators } from './actions';
import { AXIOS_INSTANCE, apiEndpoints } from '../../../config/config';
import { notification } from 'antd';
import { isArray } from 'lodash';
import Cookie from 'js-cookie';

// ********************************************* Fetch Ads List Saga *********************************************
function* fetchUserDetailsSaga(action) {
  try {
    yield put(Creators.fetchUserDetailsStart());
    const url = yield `${apiEndpoints.profile}`;

    const res = yield AXIOS_INSTANCE.get(url, { ...action.payload });

    if (res && res.status === 200) {
      const {
        data: { user }
      } = res;
      yield put(Creators.fetchUserDetailsSuccess({ ...user }));
    } else {
      throw res;
    }
  } catch (err) {
    yield put(Creators.fetchUserDetailsFailure(err.response));

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

// ********************************************* Update Saga *********************************************
function* updateSaga(action) {
  try {
    yield put(Creators.updateStart());
    const { password, history } = action.payload;
    const url = yield `${apiEndpoints.update}`;

    const res = yield AXIOS_INSTANCE.patch(url, { password: password });

    if (res && res.status === 200) {
      // yield Cookie.remove('token');
      // AXIOS_INSTANCE.defaults.headers.Authorization = null;
      yield put(Creators.updateSuccess());
      // history.push('/auth');
      // window.location.reload();
    } else {
      throw res;
    }
  } catch (err) {
    yield put(Creators.updateFailure(err.response));

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

export const watchDashboard = [
  takeLatest(Types.FETCH_USER_DETAILS, fetchUserDetailsSaga),
  takeLatest(Types.UPDATE, updateSaga)
];
