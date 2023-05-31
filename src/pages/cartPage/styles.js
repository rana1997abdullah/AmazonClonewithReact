import { Box, Button, Card, Typography, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  background: "#E3E6E6",
  padding: "1em",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2em",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export const StyledCard = styled(Card)({
  backgroundColor: "white",
  marginBottom: "20px",
  width: "75%",
  overflow: "auto",
  padding: " 10px 0 15px 0",
  margin: "1em",
  minWidth: "200px",
  padding: "0 18px 0 43px",
  paddingTop: "1em",
  paddingBottom: "1em",
  marginBottom: "1em",
});
export const StyledRightCard = styled(StyledCard)({
  width: "20%",
  height: "fit-content",
});
export const StyledTypography = styled(Typography)({
  fontWeight: "400",
  fontSize: "28px",
  lineHeight: "36px",
  color: "#0F1111",
  padding: "1em",
});
export const StyledSubTotalTypo = styled(Typography)({
  fontSize: "18px",
  lineHeight: "24px",
});
export const StyledButton = styled(Button)({
  background: "#FFD814",
  width: "100%",
  borderColor: "#FCD200",
  borderRadius: "100px",
  color: "#0F1111",
  marginTop: "1em",
  "&:hover": {
    background: "linear-gradient(to bottom,#f7dfa5,#f0c14b)",
  },
});
export const StyledLeftPrice = styled(Box)({
display:'flex',
justifyContent:'flex-end',
alignItems:'flex-end',
marginRight:'1em'
})