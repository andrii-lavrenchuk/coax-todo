import React from 'react';
import ReactDOM from 'react-dom';
import { TodosProvider } from './context/context';

import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
