import React from 'react';
import ReactDOM from 'react-dom/client'; // ← yeh line change ho gayi
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')); // ← naya method

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
