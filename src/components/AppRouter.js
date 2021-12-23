import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../utils/routes';

const AppRouter = () => (
  <Routes>
    {routes.map(({ path, Element }) => <Route key={path} path={path} element={Element} exact />)}
  </Routes>
);

export default AppRouter;
