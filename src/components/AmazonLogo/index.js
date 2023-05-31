import { Typography, Box, styled } from "@mui/material";
import { StyledFlexBox } from "../SharedStyles";

const StyledLogoBox = styled(Box)({
  height: 40,
  width: 70,
  objectFit: "contain",
});
const AmazonLogo = (props) => {
 
  return (
    <StyledFlexBox variant="h6"  component="div" {...props} >
      <StyledLogoBox component="img" src={"./amazonlogo.png"} />
    </StyledFlexBox>
  );
};
export default AmazonLogo;
