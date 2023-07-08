import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

// replace console.* for disable log on production
if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

ReactDOM.createRoot(
  document.getElementById('root'),
).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
