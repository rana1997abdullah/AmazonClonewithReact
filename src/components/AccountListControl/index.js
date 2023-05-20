import {
  Box,
  Divider,
  List,
  Typography,
} from "@mui/material";
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
const AccountListControl = ({ signin = false }) => {
  return (
    <StyledBasicFlexBox>
      <Box>
        <StyledSigninButton>Sign in</StyledSigninButton>
        <Typography>
          New Customer? <SharedLink title={"Start Here"} />
        </Typography>
      </Box>
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
              return <StyledListItem key={item}>{item}</StyledListItem>;
            })}
            {signin &&
              withSignIn.map((item) => {
                return <StyledListItem key={item}>{item}</StyledListItem>;
              })}
          </List>
        </StyledColumnFlexBox>
      </StyledFlexBox>
    </StyledBasicFlexBox>
  );
};
export default AccountListControl;
