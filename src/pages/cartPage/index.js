import { Divider, Typography } from "@mui/material";
import {
  StyledBox,
  StyledCard,
  StyledSubTotalTypo,
  StyledTypography,
  StyledButton,
  StyledRightCard,
  StyledLeftPrice,
  StyledSideImage,
  StyledEmptyCard,
  StyledFlexCard,
  StyledLoginButton,
  StyledSignupNow,
  StyledColumnFlex,
} from "./styles";
import { getCurrentUser } from "../../components/firebase";
import CartProduct from "./cartProduct";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
const CartPage = ({ cartItems, totalNumberItems, totalPrice, loading }) => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    const path = `/${item}`;
    navigate(path);
  };
  return (
    <>
      <StyledBox>
        {getCurrentUser() && (
          <StyledCard>
            {cartItems && (
              <>
                <StyledTypography>Shopping Cart</StyledTypography>
                <StyledLeftPrice>
                  <Typography>Price</Typography>
                </StyledLeftPrice>
                <Divider variant="middle" />

                {loading ? (
                  <CircularProgress />
                ) : (
                  cartItems?.map((el, index) => (
                    <CartProduct product={el} key={index} />
                  ))
                )}
              </>
            )}
            {!cartItems.length && (
              <StyledTypography>Your Amazon Cart is empty</StyledTypography>
            )}
          </StyledCard>
        )}
        {getCurrentUser() && cartItems && (
          <StyledRightCard>
            <StyledSubTotalTypo>
              Subtotal ({totalNumberItems} items): ${totalPrice}
            </StyledSubTotalTypo>
            <StyledButton>Proceed To checkout</StyledButton>
          </StyledRightCard>
        )}
        {!getCurrentUser() && (
          <StyledEmptyCard>
            <StyledSideImage
              sx={{ backgroundImage: `url('./nologincart.svg')` }}
            ></StyledSideImage>
            <StyledColumnFlex>
              <StyledTypography>Your Amazon Cart is empty</StyledTypography>
              <StyledFlexCard>
                <StyledLoginButton onClick={() => handleNavigate("login")}>
                  Sign in to your account
                </StyledLoginButton>
                <StyledSignupNow onClick={() => handleNavigate("signup")}>
                  Sign up now
                </StyledSignupNow>
              </StyledFlexCard>
            </StyledColumnFlex>
          </StyledEmptyCard>
        )}
      </StyledBox>
    </>
  );
};
export default CartPage;
