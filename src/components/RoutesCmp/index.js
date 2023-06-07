import React, { useState, useEffect, useMemo } from "react";
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
import { getCurrentUser } from "../firebase";
import instance from "../firebase/instance";
import NotFoundPage from "../../pages/NotFoundPage";

function RoutesCmp() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const checkIsSignedIn = localStorage.getItem("isSignedIn") || "";
  const [isSignedIn, setIsSignedIn] = useState(checkIsSignedIn);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNumberItems, setTotalNumberItems] = useState(0);
  const [loading, setLoading] = useState(false);

  const formatPostData = (response) => {
    let fetchedArr = [];
    let price = 0;
    let totalNumber = 0;

    if (getCurrentUser()) {
      for (let key in response.data) {
        setLoading(true);
        if (
          response.data[key].userId == getCurrentUser().uid &&
          key !== "undefined"
        ) {
          fetchedArr.push(response.data[key]);
          price += response.data[key].price * response.data[key].quantity;
          totalNumber += Number(response.data[key].quantity);
        }
      }
      setCartItems(fetchedArr);
      setTotalPrice(price.toFixed(2));
      setTotalNumberItems(totalNumber);
    } else {
      setCartItems([]);
      setTotalPrice(0);
      setTotalNumberItems(0);
    }
  };

  useEffect(() => {
    instance.get("/Cart.json").then((response) => {
      formatPostData(response);
      setLoading(false);
    });
  }, [getCurrentUser(),localStorage.getItem("user"),cartItems]);

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);
  const signIn = () => {
    setIsSignedIn(!isSignedIn);
  };
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
                totalNumberItems={totalNumberItems}
              />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route
              path="/productslist"
              element={<ProductsPage cookies={cookies} />}
            />
            <Route path="/productDetails" element={<ProductDetailsPage />} />
            <Route
              path="/Cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  totalPrice={totalPrice}
                  totalNumberItems={totalNumberItems}
                  loading={loading}
                />
              }
            />
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login signIn={signIn} />} />
        </Routes>
      </CookiesProvider>
    </Router>
  );
}

export default RoutesCmp;
