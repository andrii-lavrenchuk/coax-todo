import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadState } from './todos/local-storage/localStorage';
import { sagaWatcher } from './todos/sagas/todosSaga';
import todosReducer from './todos/todos-reducer';

const persistedState = loadState();
const saga = createSagaMiddleware();

const store = createStore(
  todosReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(saga)),
);

saga.run(sagaWatcher);
export default store;
