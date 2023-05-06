import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage, 
  SignupPage, 
  HomePage, 
  ProductsPage, 
  ProductDetailsPage, 
  BestSellingPage, 
  FAQPage, 
  CheckoutPage, 
  PaymentPage, 
  OrderSuccessPage, 
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage, 
  ShopLoginPage,
  ActivationPage,

} from "./Route.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import Store from "./redux/store";
import { loadUser, loadSeller } from "./redux/actions/user";
import { ShopHomePage } from "./ShopRoutes.js";
import SellerProtectedRoute from "./SellerProtectedRoute";

function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* <ProtectedRoute> */}
        <Route path="/profile" element={<ProfilePage />} />
        {/* </ProtectedRoute> */}
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
      </Routes>
      
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;