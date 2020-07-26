// import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
// import es6promise from 'es6-promise';
import { watchAuth } from '../containers/auth/store/sagas';

// Import all saga watchers
import { watchDashboard } from '../containers/dashboard/store/sagas';

// es6promise.polyfill();

// Import all Sagas into rootSaga
export function* rootSaga() {
  yield all([...watchAuth, ...watchDashboard]);
}
