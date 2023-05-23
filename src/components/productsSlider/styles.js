import { styled } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NextArrow = styled(ArrowForwardIosIcon)({
  backgroundColor: "#fff",
  height: "100px",
  lineHeight: "100px",
  width: "45px",
  textAlign: "center",
});

export const PrevArrow = styled(ArrowBackIosNewIcon)({
  backgroundColor: "#fff",
  height: "100px",
  lineHeight: "100px",
  width: "45px",
  textAlign: "center",
});
