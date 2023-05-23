import { Box, styled, Typography } from "@mui/material";
import {
  StyledColumnFlexBox,
  StyledFlexBox,
  StyledHeaderLink,
  StyledMainTitle,
} from "../../SharedStyles";
const StyledSubTitle = styled(Typography)({
  fontSize: "12px",
});
const OrdersNav = () => {
  return (
    <StyledHeaderLink underline="none">
      <Box>
        <StyledFlexBox>
          <StyledColumnFlexBox>
            <StyledSubTitle>Returns</StyledSubTitle>
            <StyledMainTitle>&Orders</StyledMainTitle>
          </StyledColumnFlexBox>
        </StyledFlexBox>
      </Box>
    </StyledHeaderLink>
  );
};
export default OrdersNav;
