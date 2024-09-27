import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Collection from "./pages/Collection";
import Navbar from "./components/Navbar";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/place-order",
          element: <PlaceOrder />,
        },
        {
          path: "/collection",
          element: <Collection />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
