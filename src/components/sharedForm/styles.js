import { Box, Button, Typography, styled,Card } from "@mui/material";

export const StyledLogoBox = styled(Box)({
    height: "auto",
    width: 103,
    objectFit: "contain",
  });
  export  const StyledFlexBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });
  export  const StyledCard = styled(Card)({
    display: "flex",
    justifyContent: "center",
    color: "black",
    flexDirection: "column",
    rowGap: "1em",
    padding: "1em",
    width: "350px",
    margin: "0 auto",
  });
  export  const StyledInnerBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  export  const StyledBottomDivider = styled(Box)({
    height: "44px",
    marginBottom: " -18px",
    width: "100%",
    display: "block",
  
    background:
      " linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)",
  });
  export const StyledButton = styled(Button)({
    background: "linear-gradient(to bottom,#f7f8fa,#e7e9ec)",
    width: "100%",
    color: "#111",
    textTransform: "capitalize",
    height: "29px",
    borderRadius: "3px",
    marginTop: "0.5em",
    borderColor: " #adb1b8 #a2a6ac #8d9096",
  });
  export  const StyledTypography = styled(Typography)({
    fontSize: "12px",
    fontWeight: "600",
  });
  