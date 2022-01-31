import { takeEvery } from 'redux-saga/effects';
import types from '../todos-types';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* sagaWorker() {
  console.log('saga worker');
}

export function* sagaWatcher() {
  yield takeEvery(types.ADD, sagaWorker);
}
