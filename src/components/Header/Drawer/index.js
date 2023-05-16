import {  Avatar, Drawer, Typography, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";

import StartFirebase from "../../firebase/index";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";

import InnerList from "./InnerList";
import {StyledIconButton,StyledBox,StyledMainBox, StyledAvatar} from './styles';
const DrawerCmp = ({ open, toggleDrawer, loggedIn = false ,username="rana"}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const startRef = ref(StartFirebase(), "Categories");
    onValue(startRef, (snapshot) => {
      const res = snapshot.val();
      setData(res);
    });
  }, []);


  return (
    <Drawer
      //from which side the drawer slides in
      anchor="left"
      //if open is true --> drawer is shown
      open={open}
      //function that is called when the drawer should close
      onClose={toggleDrawer(false)}
      //function that is called when the drawer should open
      onOpen={toggleDrawer(true)}
    >
      <StyledMainBox>
        <StyledBox>
        
        <StyledAvatar />   <Typography>Hello, {loggedIn ? username:'Sign in'}</Typography>
          {open && (
            <StyledIconButton>
              <CloseIcon onClick={toggleDrawer(false)} />
            </StyledIconButton>
          )}
        </StyledBox>
        <Divider sx={{ mb: 2 }} />

        <InnerList loggedIn={loggedIn} data={data} />
      </StyledMainBox>
    </Drawer>
  );
};
export default DrawerCmp;
