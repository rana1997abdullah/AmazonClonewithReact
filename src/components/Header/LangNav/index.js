import { Box } from "@mui/system";
import { StyledFlexBox, StyledHeaderLink } from "../../SharedStyles";
import StyledTooltip from "../../StyledToolTip";
import LanguagesControl from "../../LangugesControl";
import { useState } from "react";
import Flag from "react-world-flags";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from "@mui/material";
  
const StyledArrowIcon = styled(ArrowDropDownIcon)({
  color: "white",
  marginTop: "0.5em",
  marginLeft:'1em'
});
const StyledInnerBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  columnGap:' 0.4em'
})
const LangNav = () => {
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <StyledHeaderLink underline="none">
      <Box  onMouseLeave={handleTooltipClose}>
        <StyledTooltip
          left="2.1em"
          open={open}
          arrow
          placement="bottom-start"
          title={<LanguagesControl />}
        >
            
           <StyledFlexBox  onMouseEnter={handleTooltipOpen} 
          
        >
            <StyledInnerBox >
              <Flag code="us" style={{ marginTop: "0.4em" }}
               /> EN{" "}
            </StyledInnerBox>
            
           
              <StyledArrowIcon  />
         
          </StyledFlexBox>
        </StyledTooltip>
      </Box>
    </StyledHeaderLink>
  );
};
export default LangNav;
