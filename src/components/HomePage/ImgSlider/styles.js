import { styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const NextArrow = styled(ArrowForwardIosIcon)({
  height: "100%",
  lineHeight: "100px",
  width: "80px",
  backgroundColor: "transparent",
  textAlign: "center",
  color: "black",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const PrevArrow = styled(ArrowBackIosNewIcon)({
  height: "100%",
  lineHeight: "100px",
  width: "80px",
  backgroundColor: "transparent",
  textAlign: "center",
  color: "black",
  "&:hover": {
    backgroundColor: "transparent",
  },
});
