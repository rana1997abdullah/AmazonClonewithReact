import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Typography, styled } from "@mui/material";
import { StyledColumnFlexBox, StyledFlexBox, StyledHeaderLink, StyledMainTitle } from "../../SharedStyles";
const StyledLocationIcon = styled(LocationOnOutlinedIcon)({
  marginTop: "0.3em",
});
const StyledSubTitle = styled(Typography)({
  fontSize: "12px",
  color: "#ccc",
  marginBottom: "-0.5em",
});

const LocationNav = () => {

  return (
    <StyledHeaderLink underline="none">
    <StyledFlexBox>
      <StyledLocationIcon />
      <StyledColumnFlexBox>
        <StyledSubTitle>Deliver to </StyledSubTitle>
        <StyledMainTitle>Palestinian Territories</StyledMainTitle>
      </StyledColumnFlexBox>
    </StyledFlexBox>
    </StyledHeaderLink>
  );
};
export default LocationNav;
