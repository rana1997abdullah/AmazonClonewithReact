import { Box,  ListItemButton, ListItemText, Typography, styled } from "@mui/material";

export const StyledInnerBox = styled(Box)({
    mb: 2,
    paddingLeft: 0,
  });
  
  export const StyledMainItemButton = styled(ListItemButton)({
    "&:hover": {
      backgroundColor: "transparent",
    },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
  });
  export const StyledMainTypography = styled(Typography)({
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "24px",
    color: "#111",
    textTransform: "capitalize",
    padding: "1.5em",
    paddingTop: 0,
    paddingBottom: 0,
    display: "inline-block",
  });
  export const StyledListItemButtonInner = styled(ListItemButton)({
    width: "100%",
    padding: 0,
    display: "flex",
    justifyContent: "center",
  });
  export const StyledListItemButtonFlex = styled(ListItemButton)({
    width: "100%",
    padding: 0,
    display: "flex",
    fontSize: "14px",
    justifyContent: "center",
    paddingLeft: "2em",
  });
  export const StyledListItemText = styled(ListItemText)({
    paddingLeft: "2em",
    paddingRight: "6em",
    paddingTop: "0.5em",
    fontSize: "14px",
    paddingBottom: "0.5em",
    color: "#111",
  });
  export const StyledAllBox = styled(Box)({
    display: "flex",
    alignItems: "center",
  });
  export  const StyledLangText = styled(ListItemText)({
    paddingLeft: "0.5em",
    paddingRight: "6em",
    paddingTop: "0.5em",
    fontSize: "14px",
    paddingBottom: "0.5em",
    color: "#111",
  });
