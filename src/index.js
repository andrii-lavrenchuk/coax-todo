import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import { TodosProvider } from './context/context';

import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodosProvider>
        <App />
      </TodosProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
