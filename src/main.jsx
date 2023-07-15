import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/pages/App";
import "../src/components/styles/index.css";
import LoginPage from "./pages/Auth/login.jsx";
import RegisterPage from "./pages/Auth/register";
import NotFoundPage from "./pages/NotFoundPage";
import Product from "./pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
