import Register from '/src/routes/access/register/index.jsx';
import Login from '/src/routes/access/login/index.jsx';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Access() {
  return <Outlet />;
}

const accessLoader = () => {
  return null;
};

export { accessLoader };
