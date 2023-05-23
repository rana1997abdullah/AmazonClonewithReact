import { Box, styled, Typography, Link } from "@mui/material";
export const StyledFlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "0.5em",
  paddingLeft: "0.4em",
  paddingRight: "0.4em",
  "&:hover": {
    border: "1px solid white",
  },
});
export const StyledColumnFlexBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
export const StyledMainTitle = styled(Typography)({
  fontSize: "14px",
});
export const StyledHeaderLink = styled(Link)({
  color: "white",
});
export const StyledSharedCategoryTitle = styled(Typography)({
  fontSize: "21px",
  color: "#0F1111",
});
