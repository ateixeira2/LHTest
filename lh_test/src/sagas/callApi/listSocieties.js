import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects';

import callApi from '../../helpers/api';

function* fetchListSocieties() {
  try {
    const lists = yield call(callApi);
    yield put({ type: 'LIST_SOCIETIES_FETCH_SUCCEEDED', payload: lists });
  } catch (e) {
    yield put({ type: 'LIST_SOCIETIES_FETCH_FAILED', payload: e.message });
  }
}


function* listSocieties() {
  yield takeEvery('LIST_SOCIETIES_FETCH_REQUESTED', fetchListSocieties);
}

export default listSocieties;
