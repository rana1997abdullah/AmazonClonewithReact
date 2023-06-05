import { Box, Divider, List, Typography } from "@mui/material";
import SharedLink from "../StyledLink";
import { accountdataList, withSignIn } from "./accountdataList";

import {
  StyledBasicFlexBox,
  StyledColumnFlexBox,
  StyledSigninButton,
  StyledListItem,
  StyledInnerColumnBox,
  StyledFlexBox,
} from "./styles";
import { signOut } from "firebase/auth";
import { StartAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
const AccountListControl = ({ loggedIn = false,removeCookie }) => {
  const navigate = useNavigate();
  const handleLogout = async(e, item) => {
    e.preventDefault();
    if (item == "Sign out")
      await signOut(StartAuth())
        .then(() => {
          // Sign-out successful.
          localStorage.setItem("isSignedIn",false);
          removeCookie('loggedIn');
          localStorage.setItem("uid",null)
          navigate("/home", { state: { loggedIn: false } });
          console.log("Signed out successfully");
        })
        .catch((error) => {
          // An error happened.
        });
  };
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handlesignup = (e)=>{
    e.preventDefault();
    navigate('/signup')
  }
  return (
    <StyledBasicFlexBox>
      {!loggedIn && (
        <Box>
          <StyledSigninButton onClick={handleClick}>Sign in</StyledSigninButton>
          <Typography>
            New Customer? <SharedLink title={"Start Here"} onClick={handlesignup} />
          </Typography>
        </Box>
      )}
      <Divider variant="middle" flexItem />
      <StyledFlexBox>
        <StyledInnerColumnBox>
          <Typography>Your Lists</Typography>
          <List>
            <StyledListItem>Create a List</StyledListItem>
            <StyledListItem>Find a List</StyledListItem>
          </List>
        </StyledInnerColumnBox>
        <Divider orientation="vertical" flexItem variant="middle" />
        <StyledColumnFlexBox>
          <Typography>Your Account</Typography>
          <List>
            {accountdataList.map((item) => {
              return (
                <StyledListItem key={item}>
                  <SharedLink title={item} />
                </StyledListItem>
              );
            })}
            {loggedIn &&
              withSignIn.map((item) => {
                return (
                  <StyledListItem
                    key={item}
                    onClick={(e) => handleLogout(e, item)}
                  >
                    <SharedLink title={item} />
                  </StyledListItem>
                );
              })}
          </List>
        </StyledColumnFlexBox>
      </StyledFlexBox>
    </StyledBasicFlexBox>
  );
};
export default AccountListControl;
