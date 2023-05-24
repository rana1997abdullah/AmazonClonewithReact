import { AppBar, Toolbar, Box } from "@mui/material";

import { styled } from "@mui/material/styles";

import StartFirebase from "../firebase/index";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import AmazonLogo from "../AmazonLogo";
import SearchComp from "./SearchComp";
import LocationNav from "./LocationNav";

import CartNav from "./CartNav";
import LangNav from "./LangNav";
import AccountNav from "./AccountNav";
import OrdersNav from "./OrdersNav";
import { StyledHeaderLink } from "../SharedStyles";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#131921",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    rowGap: "1em",
  },
  columnGap: "0.2em",
  [theme.breakpoints.up("md")]: {
    columnGap: "0.2em",
  },
  [theme.breakpoints.up("lg")]: {
    columnGap: "0.1em",
  },
  [theme.breakpoints.up("xl")]: {
    columnGap: "2em",
  },
}));

const Header = ({ loggedIn = false, username, setBackgroundBody }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const startRef = ref(StartFirebase(), "Categories");
    onValue(startRef, (snapshot) => {
      const res = snapshot.val();
      setData(res);
    });
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolbar>
            <StyledHeaderLink underline="none">
              <AmazonLogo />
            </StyledHeaderLink>
            <LocationNav />
            <SearchComp data={data} setBackgroundBody={setBackgroundBody} />
            <LangNav />
            <Box sx={{ flexGrow: 0.4 }} />
            <AccountNav loggedIn={loggedIn} username={username} />
            <Box sx={{ flexGrow: 0.4 }} />
            <OrdersNav />
            <CartNav />
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
