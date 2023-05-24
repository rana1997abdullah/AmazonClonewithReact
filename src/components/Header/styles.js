import { List, ListItem, Toolbar, styled } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
    "&.MuiToolbar-root": {
      minHeight: "48px",
      backgroundColor: "#232f3e",
      color: "white",
      paddingTop: 0,
    },
  });
  export const StyledList = styled(List)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    padding: 0,
    paddingLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));
 export const StyledItem = styled(ListItem)({
    width: "auto",
    display: "flex",
    alignItems: "center",
    padding: "0.5em",
    "&:hover": {
      border: "1px solid white",
     
      height: "100%",
    },
  });
