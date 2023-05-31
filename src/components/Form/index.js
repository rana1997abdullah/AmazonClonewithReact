import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signup from "../../pages/SignUp";
import Home from "../Home";
import Login from "../../pages/Login";
import ProductsPage from "../../pages/ProductsPage";
import HomePage from "../HomePage";
import { CookiesProvider, useCookies } from "react-cookie";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import CartPage from "../../pages/cartPage";

function Form() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const checkIsSignedIn = localStorage.getItem("isSignedIn") || "";
  const [isSignedIn, setIsSignedIn] = useState(checkIsSignedIn);

  const signIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  return (
    <Router>
          <CookiesProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    cookies={cookies}
                    setCookie={setCookie}
                    removeCookie={removeCookie}
                  />
                }
              >
                <Route index element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route
                  path="/productslist"
                  element={<ProductsPage cookies={cookies} />}
                />
                 <Route
                  path="/productDetails"
                  element={<ProductDetailsPage  />}
                />
                  <Route
                  path="/Cart"
                  element={<CartPage  />}
                />
              </Route>

              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login signIn={signIn} />} />
            </Routes>
          </CookiesProvider>
     
    </Router>
  );
}

export default Form;
