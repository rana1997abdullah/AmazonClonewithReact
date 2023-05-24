import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import StartFirebase, { StartAuth } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import InnerHeader from "../Header/InnerHeader";
import { onValue, ref } from "firebase/database";
import HomePage from "../HomePage";
const Home = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [backgroundBody, setBackgroundBody] = useState("transparent");

  useEffect(() => {
    const startRef = ref(StartFirebase(), "Users");
    if (location.state?.loggedIn)
      onValue(startRef, (snapshot) => {
        const res = snapshot.val();
        let user = Object.values(res).filter(
          (el) => el.userId == location.state.userId
        );
        console.log(
          Object.values(res).filter((el) => el.userId == location.state.userId)
        );
        setUser(user[0]);
        console.log(location.state.userId);
      });
  }, []);

  return (
    <>
      <Header
        loggedIn={location.state?.loggedIn}
        username={user.username}
        setBackgroundBody={setBackgroundBody}
      />
      <InnerHeader
        loggedIn={location.state?.loggedIn}
        username={user.username}
      />
      <HomePage />
    </>
  );
};

export default Home;
