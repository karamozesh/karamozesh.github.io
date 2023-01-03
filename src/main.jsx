import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

const router = createBrowserRouter([
  {
    path: '',
    element: '',
    loader: '',
    children: [],
  },
]);

ReactDOM.createRoot(
  document.getElementById('root'),
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
