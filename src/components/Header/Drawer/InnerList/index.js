
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Divider from "@mui/material/Divider";
import Flag from "react-world-flags";
import { StyledInnerBox, 
  StyledMainItemButton, 
  StyledMainTypography,
StyledAllBox,StyledLangText,StyledListItemButtonFlex,StyledListItemButtonInner,StyledListItemText
} from "./styles";
import { useState } from "react";

const InnerList = ({ data, loggedIn }) => {

  return (
    <StyledInnerBox>
      {Object.keys(data).map((el, index) => (
     <>
          <StyledMainItemButton key={el}>
            <ListItemText
              primary={<StyledMainTypography>{el}</StyledMainTypography>}
            />
            {Object.values(data[el]).slice(0,4).map((ele) => (
              <StyledListItemButtonInner key={ele}>
                <StyledListItemText primary={ele} />
            {el !== "Trending" &&   <KeyboardArrowRightIcon
                  color="disabled"
                  sx={{ paddingRight: "1em" }}
                />
            }
              </StyledListItemButtonInner>
            ))}
          </StyledMainItemButton>
          {(index == 1 || index == 2) && (
            <StyledAllBox>
              <StyledListItemText
                sx={{ paddingRight: "0" }}
                primary="See All"
              />
              <KeyboardArrowDownOutlinedIcon
                color="disabled"
                sx={{ marginRight: "10em" }}
              />
            </StyledAllBox>
          )}
          <Divider
            variant="middle"
            sx={{ marginBottom: "1em", marginTop: "0.5em" }}
          />
        </>
      ))}

      <StyledMainItemButton>
        <ListItemText
          primary={<StyledMainTypography>Help & Settings</StyledMainTypography>}
        />
      </StyledMainItemButton>
      <StyledListItemButtonInner>
        <StyledListItemText primary="Your Acount" />
      </StyledListItemButtonInner>
      <StyledListItemButtonFlex>
        <LanguageIcon width={"14px"} height={"14px"} color="disabled" />
        <StyledLangText primary="English" />
      </StyledListItemButtonFlex>
      <StyledListItemButtonFlex>
        <Flag code="us" width={"18px"} height={"12px"} />
        <StyledLangText primary="United States" />
      </StyledListItemButtonFlex>
      <StyledListItemButtonInner>
        <StyledListItemText primary="Customer Service" />
      </StyledListItemButtonInner>
      <StyledListItemButtonInner>
        <StyledListItemText primary={!loggedIn ? "Sign in" : "Sign out"} />
      </StyledListItemButtonInner>
    </StyledInnerBox>
  );
};
export default InnerList;
