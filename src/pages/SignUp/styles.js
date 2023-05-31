import {Button, InputBase, InputLabel, styled } from "@mui/material";

export const StyledInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: "1.5em",
      color: "black",
      height: "31px",
    },
  
    "& .MuiInputBase-input": {
      borderRadius: 4,
      border: " 1px solid #a6a6a6",
      borderTopColor: "#949494",
      backgroundColor: "white",
      fontSize: 16,
      width: "100%",
      padding: "3px 7px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
  
      "&:focus": {
        borderColor: " #e77600",
        boxShadow: " 0 0 3px 2px rgba(228,121,17,.5)",
      },
    },
  }));
  export const StyledButton = styled(Button)({
    width: "100%",
    background: "linear-gradient(to bottom,#f7dfa5,#f0c14b)",
    borderColor: "#a88734 #9c7e31 #846a29",
    color: "#111",
    textTransform: "capitalize",
  });
  export const StyledInputLabel = styled(InputLabel)({
    color: "#111",
    fontWeight: "700",
  });
  