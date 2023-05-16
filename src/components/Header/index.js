import { AppBar, Toolbar, Box, IconButton } from "@mui/material";

import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import AmazonLogo from "../AmazonLogo";
import SearchComp from "./SearchComp";
import LocationNav from "./LocationNav";

import CartNav from "./CartNav";
import LangNav from "./LangNav";
import AccountNav from "./AccountNav";
import OrdersNav from "./OrdersNav";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#131921",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    rowGap: "1em",
  },
  columnGap: "1em",
}));

const Header = ({ loggedin = false, username = "rana" }) => {
 

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolbar>
            <AmazonLogo />
            <LocationNav />
            <SearchComp />
            <LangNav />
            <Box sx={{  flexGrow: 0.4 }} />
            <AccountNav loggedin={loggedin} username={username} />
            <Box sx={{  flexGrow: 0.4 }} />
            <OrdersNav />
            <Box sx={{  flexGrow: 0.4 }} />
            <CartNav />
           
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
