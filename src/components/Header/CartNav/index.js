import { Box, Badge, IconButton, Typography, styled } from "@mui/material";
import { StyledHeaderLink } from "../../SharedStyles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import instance from "../../firebase/instance";
import { useState } from "react";
import { getCurrentUser } from "../../firebase";

const StyledCartBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  paddingLeft: "0.5em",
  paddingRight: "0.5em",
  "&:hover": {
    border: "1px solid white",
  },
});
const StyledTypography = styled(Typography)({
  marginTop: "1em",
  marginLeft: "-1em",
});
const StyledShoppingCartIcon = styled(ShoppingCartOutlinedIcon)({
  fontSize: "28px",
});

const CartNav = () => {
  const [cartItems,setCartItems] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    instance.get("/Cart.json").then((response) => {
      const fetchedResults = [];

      for (let key in response.data) {
        fetchedResults.push({
          ...response.data[key],
          id: key,
        });
      }
     setCartItems(fetchedResults)
      });
  }, [cartItems]);
  const handleNavigate = ()=>{
  
    navigate('/Cart');
  
  }
  return (
    <StyledHeaderLink underline="none" onClick={handleNavigate}>
      <StyledCartBox>
        <IconButton
          size="large"
          aria-label="show new notifications"
          color="inherit"
        >
          <Badge badgeContent={getCurrentUser() ? cartItems.length:0} color="error">
            <StyledShoppingCartIcon />
          </Badge>
        </IconButton>
        <StyledTypography> Cart</StyledTypography>
      </StyledCartBox>
    </StyledHeaderLink>
  );
};
export default CartNav;
