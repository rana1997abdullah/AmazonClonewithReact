import { Avatar, Box, IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)({
  display: "flex",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  marginLeft: "5em",
});

export const StyledBox = styled(Box)({
  backgroundColor: "#232f3e",
  height: "50px",
  alignItems: "center",
  display: "flex",
  color: "white",
  p: 0,
  paddingLeft: "1em",
  justifyContent: "center",
  columnGap: "1em",
});

export const StyledMainBox = styled(Box)({
  height: 1,
  padding: 0,
  backgroundColor: "white",
});
export const StyledAvatar = styled(Avatar)({
  backgroundColor: "white",
  color: "black",
  height: "25px",
  width: "27px",
  marginLeft: "0.6em",
});
