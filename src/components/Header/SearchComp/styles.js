import { Box, InputBase, Select, styled,Autocomplete } from "@mui/material";

export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    marginRight: theme.spacing(2),
    marginLeft: 0,
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    }, 
  }));
  export const SearchIconWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "#febd69",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    borderRadius: "0px 4px 4px 0px",
    paddingLeft: "0.4em",
    paddingRight: "0.4em",
    "&:hover":{
      boxShadow: "0 0 0 2px #f90,0 0 0 3px rgba(255,153,0,0.5)",
      border: 0,
    },
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
      padding: theme.spacing(1, 1, 1, 1),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "100%",
      },
      minWidth: "600px",
      [theme.breakpoints.down("lg")]: {
        minWidth: "auto",
      },
      "&.MuiAutocomplete-input MuiAutocomplete-inputFocused":{
        boxShadow: "0 0 0 2px #f90,0 0 0 3px rgba(255,153,0,0.5)",
        border:0
      },
      "&:focus":{
        boxShadow: "0 0 0 2px #f90,0 0 0 3px rgba(255,153,0,0.5)",
        border: 0,
      },
    // },
    backgroundColor:'white'
  }));
 export  const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
  });
export const StyledAutoComplete = styled(Autocomplete)({
  display: "inline-block",
  height: "40px",
  border: 0,
  "& input": {
    bgcolor: "background.paper",

    color: (theme) =>
      theme.palette.getContrastText(theme.palette.background.paper),
  },
});
  