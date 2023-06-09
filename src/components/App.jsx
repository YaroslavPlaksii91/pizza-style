import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const PizzaPage = lazy(() =>
  import('../pages/PizzaPage' /* webpackChunkName: "pizza-page" */),
);

const CartPage = lazy(() =>
  import('../pages/CartPage' /* webpackChunkName: "cart-page" */),
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PizzaPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
