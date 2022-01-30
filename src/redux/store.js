import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadState } from './todos/local-storage/localStorage';
import todosReducer from './todos/todos-reducer';

const persistedState = loadState();

const store = createStore(todosReducer, persistedState, composeWithDevTools());
export default store;
