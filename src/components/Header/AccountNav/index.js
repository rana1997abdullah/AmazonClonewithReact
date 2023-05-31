import { Box, styled, Typography } from "@mui/material";
import {
  StyledColumnFlexBox,
  StyledFlexBox,
  StyledHeaderLink,
  StyledMainTitle,
} from "../../SharedStyles";
import StyledTooltip from "../../StyledToolTip";
import AccountListControl from "../../AccountListControl";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const StyledSubTitle = styled(Typography)({
  fontSize: "12px",
});
const StyledArrowIcon = styled(ArrowDropDownIcon)({
  color: "white",
  marginTop: "0.5em",
});

const AccountNav = ({ loggedIn = false, username,removeCookie }) => {
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <StyledHeaderLink underline="none">
      <Box onMouseLeave={handleTooltipClose}>
        <StyledTooltip
          open={open}
          arrow
          left="3.9em"
          placement="bottom-end"
          title={<AccountListControl 
            loggedIn={loggedIn}
            removeCookie={removeCookie}
            />}
        >
          <StyledFlexBox onMouseEnter={handleTooltipOpen}>
            <StyledColumnFlexBox>
              <StyledSubTitle>
                Hello,{loggedIn ? username : "sign in"}
              </StyledSubTitle>
              <StyledMainTitle>Account & Lists</StyledMainTitle>
            </StyledColumnFlexBox>
            <Box>
              <StyledArrowIcon />
            </Box>
          </StyledFlexBox>
        </StyledTooltip>
      </Box>
    </StyledHeaderLink>
  );
};
export default AccountNav;
