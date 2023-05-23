import { styled, Typography, CardContent, Paper } from "@mui/material";

export const StyledTypography = styled(Typography)({
  fontSize: "13px",
  color: "black",
  textAlign: "left",
});
export const StyledCardContent = styled(CardContent)({
  padding: 0,
  paddingTop: "1em",
});
export const Item = styled(Paper)({
  padding: 1,
  textAlign: "left",
  border: "none",
  boxShadow: "none",
});
