import { Box, Button, Card, Typography, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  background: "#E3E6E6",
  padding: "1em",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2em",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export const StyledCard = styled(Card)({
  backgroundColor: "white",
  marginBottom: "20px",
  width: "75%",
  padding: " 10px 0 15px 0",
  margin: "1em",
  minWidth: "200px",
  padding: "0 18px 0 43px",
  paddingTop: "1em",
  paddingBottom: "1em",
  marginBottom: "1em",
});
export const StyledRightCard = styled(StyledCard)({
  width: "20%",
  height: "fit-content",
});
export const StyledTypography = styled(Typography)({
  fontWeight: "400",
  fontSize: "28px",
  lineHeight: "36px",
  color: "#0F1111",
  padding: "1em",
});
export const StyledSubTotalTypo = styled(Typography)({
  fontSize: "18px",
  lineHeight: "24px",
});
export const StyledButton = styled(Button)({
  background: "#FFD814",
  width: "100%",
  borderColor: "#FCD200",
  borderRadius: "100px",
  color: "#0F1111",
  marginTop: "1em",
  "&:hover": {
    background: "linear-gradient(to bottom,#f7dfa5,#f0c14b)",
  },
});
export const StyledLeftPrice = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  marginRight: "1em",
});
export const StyledSideImage = styled(Box)({
  width: "30%",
  aspectRatio: "auto 180 / 180",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "1em",
  marginTop: "4em",
  marginLeft: "1em",
  backgroundRepeat: "no-repeat",
  display: "flex",
});
export const StyledEmptyCard = styled(Card)({
  backgroundColor: "white",
  marginBottom: "20px",
  width: "100%",
  margin: "2em",
  minWidth: "200px",
  marginBottom: "1em",

  display: "flex",
  alignItems: "center",
  width: "75%",
  columnGap: "1em",
});
export const StyledFlexCard = styled(Box)({
  display: "flex",
  alignItems: "center",
  columnGap: "1em",
});
export const StyledLoginButton = styled(Button)({
  width: "100%",
  background: "#FFD814",
  borderColor: "#FCD200",
  boxShadow: "0 2px 5px 0 rgba(213,217,217,.5)",
  color: "#111",
  padding: "0 10px 0 11px",
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "24px",
  minWidth: "200px",
  marginTop: "-6em",
  fontWeight: "600",
  whiteSpace: "nowrap",
  height: "29px",
  "&:hover": {
    background: "#f0b800",
    borderColor: "#008296",
    boxShadow: "0 0 0 3px #c8f3fa,inset 0 0 0 2px #fff",
  },
});
export const StyledSignupNow = styled(Button)({
  backgroundColor: "transparent",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#0F1111",
  marginTop: "-6em",
  padding: "0 10px 0 11px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px 0 rgba(213,217,217,.5)",
  border: "1px solid #D5D9D9",
  width: "100%",
  fontWeight: "600",
  whiteSpace: "nowrap",
  textTransform: "none",
  height: "29px",
});
export const StyledColumnFlex = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  rowGap: "5em",
  marginTop: "1em",
});
