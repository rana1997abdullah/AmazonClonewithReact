import { Drawer, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";

import InnerList from "./InnerList";
import {
  StyledIconButton,
  StyledBox,
  StyledMainBox,
  StyledAvatar,
} from "./styles";
const DrawerCmp = ({
  open,
  toggleDrawer,
  loggedIn = false,
  username,
  data,
}) => {
  return (
    <Drawer
      //from which side the drawer slides in
      anchor="left"
      //if open is true --> drawer is shown
      open={open}
      //function that is called when the drawer should close
      onClose={toggleDrawer(false)}
    >
      <StyledMainBox>
        <StyledBox>
          <StyledAvatar />
          <Typography>Hello, {loggedIn ? username : "Sign in"}</Typography>
          {open && (
            <StyledIconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
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
