import React, { useEffect, useState } from "react";
import StartFirebase, { getCurrentUser } from "../firebase";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import InnerHeader from "../Header/InnerHeader";
import { onValue, ref } from "firebase/database";

import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Home = ({ cookies, removeCookie, isSignedIn, totalNumberItems }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState();
  const checkcurrentUser = () => {
    return getCurrentUser();
  };
  useEffect(() => {
    const existsUser = checkcurrentUser();
    setLoggedIn(existsUser ? true : false);
    const startRef = ref(StartFirebase(), "Users");

    if (user) {
      onValue(startRef, (snapshot) => {
        const res = snapshot.val();
        const userId = getCurrentUser().uid;
        let userItem = Object.values(res).filter((el) => el.userId === userId);

        setLoggedIn(isSignedIn);
        localStorage.setItem("user", userItem[0]);
        setUser(userItem[0]);

        setUser(userItem[0]);
      });
    }
  }, []);

  return (
    <>
      <Header
        loggedIn={getCurrentUser() ? true : false}
        totalNumberItems={totalNumberItems}
        username={user ? user.username : ""}
        removeCookie={removeCookie}
      />
      <InnerHeader
        removeCookie={removeCookie}
        loggedIn={
          location.state?.loggedIn ||
          cookies.loggedIn ||
          localStorage.getItem("isSignedIn")
        }
        username={user ? user.username : ""}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
