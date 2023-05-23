import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  zIndex: 1,
  margin: "1em",
  marginLeft: "0.5em",
  marginRight: "0.5em",
  marginTop: "-9.5em",
  columnGap: "3em",

  [theme.breakpoints.up("md")]: {
    flexWrap: "wrap",
    rowGap: "1em",
    marginTop: "-3em",
    columnGap: "1em",
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    rowGap: "1em",
    columnGap: "1em",
    marginTop: "-3em",
  },
  [theme.breakpoints.up("lg")]: {
    rowGap: "1em",
    marginTop: "-1em",
    columnGap: "1em",
    flexWrap: "wrap",
  },
}));
export const StyledContainer = styled("div")({
  background: "#E3E6E6",
  padding: "1em",
  paddingTop: 0,
});
export const StyledInnerBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
