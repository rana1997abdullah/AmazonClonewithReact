import { Box, InputBase, Select, styled } from "@mui/material";

export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    display: "flex",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  export const SearchIconWrapper = styled("div")(({ theme }) => ({
    backgroundColor: "#febd69",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    borderRadius: "0px 4px 4px 0px",
    paddingLeft: "0.4em",
    paddingRight: "0.4em",
  }));
  
  export const AllSelect = styled(Select)(({ theme }) => ({
    backgroundColor: "#f3f3f3",
    display: "flex",
    alignItems: "center",
    color: "black",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    borderTopColor: "white",
    height: "40px",
    margin: 0,
    "&:hover": {
      borderColor: "#dadada",
      borderRadius: "4px 0px 0px 4px",
      backgroundColor: "#dadada",
      border: 0,
    },
  
    ".MuiOutlinedInput-notchedOutline": {
      border: 0,
      borderRight: "1px solid #dadada",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline ": {
      boxShadow: "0 0 0 2px #f90,0 0 0 3px rgba(255,153,0,0.5)",
      border: 0,
    },
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 1),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "100%",
      },
    },
    "&.MuiInputBase-root": {
      minWidth: "600px",
      [theme.breakpoints.down("lg")]: {
        minWidth: "auto",
      },
    },
  }));
 export  const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
  });

  