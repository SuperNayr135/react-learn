import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/pages/App";
import "../src/components/styles/index.css";
import LoginPage from "./pages/Auth/login.jsx";
import RegisterPage from "./pages/Auth/register";
import NotFoundPage from "./pages/NotFoundPage";
import Product from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProfilePage from "./pages/Profile";
import DarkModeContextProvider from "./context/DarkMode";
import { TotalPriceProvider } from "./context/TotalPriceContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TotalCartProvider } from "./context/TotalCart";

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
    path: "/products",
    element: <Product />,
  },
  {
    path: "/product/:id",
    element: <DetailProduct />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalCartProvider>
          <TotalPriceProvider>
            <RouterProvider router={router} />
            {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/products" element={<Product />} />
              <Route path="/product/:id" element={<DetailProduct />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter> */}
          </TotalPriceProvider>
        </TotalCartProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
