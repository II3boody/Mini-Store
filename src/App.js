import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Componant/Pages/Home/Home'
import Error from './Componant/Pages/Error/Error';
import Products from './Componant/Pages/Products/Products';
import ProductDetails from './Componant/Pages/ProductDetails/ProductDetails';
import Cart from './Componant/Pages/Cart/Cart';

export default function App() {
  let routers = createHashRouter([
    {
      path: '/', element: <Layout />, errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "products/:id", element: <ProductDetails /> },
        { path: "/cart", element: <Cart /> },
      ]
    },

  ]);
  return (
    <RouterProvider router={routers} />
  )
}