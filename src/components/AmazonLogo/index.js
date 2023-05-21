import { Typography, Box, styled } from "@mui/material";

const StyledLogoBox = styled(Box)({
  height: 40,
  width: 70,
  objectFit: "contain",
});
const StyledLogoTypo = styled(Typography)({
  display: "flex",
  alignItems: "center",
});
const AmazonLogo = () => {
 
  return (
    <StyledLogoTypo variant="h6" noWrap component="div">
      <StyledLogoBox component="img" src={"./amazonlogo.png"} />
    </StyledLogoTypo>
  );
};
export default AmazonLogo;
