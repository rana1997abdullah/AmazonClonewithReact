import { Button, Link, RadioGroup, Typography, styled } from "@mui/material";
export const StyledChangeLink = styled(Link)({
    "&:hover": {
      textDecorationColor: "#C7511F",
    },
  });
  
 export  const StyledSubTitle = styled(Typography)({
    fontSize: "12px",
  });
export const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px rgb(16 22 26 / 40%)"
        : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
        : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundImage: "radial-gradient(#C7511F,#C7511F 28%,transparent 32%)",
    },
  }));
  
  export const BpCheckedIcon = styled(BpIcon)({
    backgroundImage: "radial-gradient(#C7511F,#C7511F 28%,transparent 32%)",
  
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      content: '""',
    },
  });
  export const StyledRadioGroup = styled(RadioGroup)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  });
  export const StyledButton = styled(Button)({
    textTransform: "capitalize",
  });

  