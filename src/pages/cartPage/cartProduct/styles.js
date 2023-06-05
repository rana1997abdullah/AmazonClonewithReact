import { Box, Card, FormControl, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)({
  display: "flex",
  columnGap: "1em",
  justifyContent: "space-between",
  width: "90%",
  margin: "1em",
  padding: "1em",
});
export const StyledSideImage = styled(Box)({
  width: "160px",
  aspectRatio: "auto 180 / 180",
  height: "160px",
  backgroundRepeat: "round",
});
export const StyledProductDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  rowGap: "1em",
});
export const StyledActionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: "0.5em",
  justifyContent:'flex-start',
  alignItems:'center',
  marginTop:'-2.5em',
  cursor: "pointer",
  [theme.breakpoints.down("md")]:{
    marginLeft:'1em'
  }
}));
export const StyledMainTypography = styled(Typography)({
  fontSize: "18px",
  color: "#0F1111",
  width:'90%'
});
export const StyledPriceTypography = styled(Typography)({
    fontSize: "18px",
    color: "#0F1111",
    
  });
export const StyledAction = styled(Link)({
  color: "#007185",
  textDecorationLine: "none",
  fontSize: "12px",
  

  "&:hover": {
    textDecorationColor: "#007185",
    textDecorationLine: "underline",
  },
});
export const StyledTypography = styled(Typography)({
    fontSize: "18px",
    lineHeight: " 24px",
    color: "#0F1111",
  });
export const StyledInStockTypo = styled(StyledTypography)({
  color: "#007600",
});
export const StyledFormControl = styled(FormControl)({
    display: "flex",
    marginBottom:'4em'
});
export const StyledBottomBox = styled(Box)(({ theme }) => ({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    [theme.breakpoints.down("lg")]:{
        flexDirection:'column',
        flexWrap:'wrap',
        alignItems:'flex-start'
    }
    
}))

