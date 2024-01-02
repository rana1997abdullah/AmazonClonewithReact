import React, {  useState } from "react";
import  { getCurrentUser } from "../firebase";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import InnerHeader from "../Header/InnerHeader";

import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Home = ({ cookies, removeCookie, isSignedIn, totalNumberItems,username }) => {
 const location = useLocation();
 

  return (
    <>
      <Header
        loggedIn={getCurrentUser() ? true : false}
        totalNumberItems={totalNumberItems}
        username={username ? username : ""}
        removeCookie={removeCookie}
      />
      <InnerHeader
        removeCookie={removeCookie}
        loggedIn={
          location.state?.loggedIn ||
          cookies.loggedIn ||
          localStorage.getItem("isSignedIn")
        }
        username={username ? username : ""}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
