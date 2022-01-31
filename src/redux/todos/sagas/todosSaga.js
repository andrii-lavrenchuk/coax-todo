import { takeEvery } from 'redux-saga/effects';
import types from '../todos-types';

function* sagaWorker() {
  console.log('saga worker');
}

export function* sagaWatcher() {
  yield takeEvery(types.ADD, sagaWorker);
}
