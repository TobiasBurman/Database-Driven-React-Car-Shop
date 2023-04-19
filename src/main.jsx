import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ManageProducts from './pages/admin/ManageProducts';

import ErrorPage from './pages/admin/ErrorPage';
import Root from './pages/admin/Root';
import Products from './pages/Products';
import CreateProduct from './pages/admin/CreateProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import Product from './components/Product';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/pages/admin/ManageProducts",
        element: <ManageProducts />,
      },
      {
      path: "/pages/Products",
      element: <Products />
      },
      {
        path: "/pages/admin/CreateProduct",
        element: <CreateProduct />,
      }, {
        path: "/pages/admin/UpdateProduct",
        element: <UpdateProduct />,
      },
      {
        path: "/components/Product",
        element: <Product />,
      },
      {
        path: "/pages/ProductPage",
        element: <ProductPage />
      },
      {
        path: "/components/Cart",
        element: <Cart />
      }, {
        path: "/pages/Checkout",
        element: <Checkout />
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
