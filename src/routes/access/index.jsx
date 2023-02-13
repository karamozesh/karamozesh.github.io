import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Access() {
  return <Outlet />;
}

const accessLoader = () => {
  return null;
};

export { accessLoader };
