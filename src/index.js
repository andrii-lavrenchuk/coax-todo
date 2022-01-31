import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { saveState } from './redux/todos/local-storage/localStorage';
import store from './redux/store';
import App from './App';

import './index.scss';

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
