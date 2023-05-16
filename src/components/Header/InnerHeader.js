import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { List, ListItem } from "@mui/material";
import DrawerCmp from "./Drawer";
import {StyledItem,StyledList,StyledToolbar} from './styles';

const HeaderList = [
  "Today's Deals",
  "Customer Service",
  "Registry",
  "Gift Cards",
  "Sell",
];
 const InnerHeader=()=> {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  

  return (
    <StyledToolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Typography variant="h6">All</Typography>
      <StyledList>
        {HeaderList.map((el) => {
          return <StyledItem>{el}</StyledItem>;
        })}
      </StyledList>

      <DrawerCmp open={open} 
      toggleDrawer={toggleDrawer}
      
      />
    </StyledToolbar>
  );
}
export default InnerHeader;