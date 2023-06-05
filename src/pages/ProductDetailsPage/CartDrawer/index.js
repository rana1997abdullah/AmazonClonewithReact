import {
  StyledDrawer,
  InnerDrawerBox,
  AddedTypo,
  DrawerOuterButtonsBox,
  DrawerButtonsBox,
  CartBtn,
  ProceedCheckoutBtn,
  StyledSideDrawerImage,
  StyledImageDrawerBox,
  StyledOuterBackBox,
  StyledBtnTitle,
} from "../styles";
import { useState } from "react";
import StartFirebase, { getCurrentUser } from "../../../components/firebase";
import { onValue, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import { useEffect } from "react";
import instance from "../../../components/firebase/instance";
import CircularProgress from '@mui/material/CircularProgress';

const CartDrawer = ({ product, open, setopen }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNumberItems, setTotalNumberItems] = useState(0);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const formatPostData = (response) => {
    let fetchedArr = [];
    let price = 0;
    let totalNumber = 0;
    for (let key in response.data) {
      setLoading(true);
      if (
        response.data[key].userId == getCurrentUser().uid &&
        key !== "undefined"
      ) {
        fetchedArr.push(response.data[key]);
        price += response.data[key].price * response.data[key].quantity;
        totalNumber += Number(response.data[key].quantity);
      }
     
    }
   
    setCartItems(fetchedArr);
    setTotalPrice(price.toFixed(2));
    setTotalNumberItems(totalNumber);

  };

  useEffect(() => {
    instance.get("/Cart.json").then((response) =>  {
      formatPostData(response);
      setLoading(false);
    });
  }, [cartItems]);

  const handleGoToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/Cart");
  };
  return (
    <StyledDrawer anchor="right" open={open} onClose={() => setopen(false)}>
      <StyledOuterBackBox>
     {loading ? <CircularProgress/> :   <InnerDrawerBox>
          <CheckCircleOutlineOutlinedIcon sx={{ color: "green" }} />
          <StyledImageDrawerBox>
            <AddedTypo> Added to Cart</AddedTypo>
            <StyledSideDrawerImage
              sx={{ backgroundImage: `url(${product.image})` }}
            ></StyledSideDrawerImage>
          </StyledImageDrawerBox>

          <DrawerOuterButtonsBox>
            <StyledBtnTitle>
              Cart Subtotal {!loading && `(${totalNumberItems} items): $ ${totalPrice}`}
            </StyledBtnTitle>
            <DrawerButtonsBox>
              <CartBtn onClick={handleGoToCart}>Cart</CartBtn>
              <ProceedCheckoutBtn>Proceed to Checkout</ProceedCheckoutBtn>
            </DrawerButtonsBox>
          </DrawerOuterButtonsBox>
        </InnerDrawerBox>}
      </StyledOuterBackBox>
    </StyledDrawer>
  );
};
export default CartDrawer;
