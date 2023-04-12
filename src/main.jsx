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
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
