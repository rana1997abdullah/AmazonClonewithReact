import { Drawer, Typography } from "@mui/material";
import {
  StyledCard,
  StyledCartBox,
  StyledCartButton,
  StyledFormControl,
  StyledInputLabel,
  StyledPriceTypo,
  StyledInStockTypo,
  TextInput,
  StyledFlexBox,
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
} from "./styles";
import { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SharedLink from "../../components/StyledLink";
import StartFirebase, { getCurrentUser } from "../../components/firebase";
import {
  onValue,
  ref,
} from "firebase/database";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import { useEffect } from "react";
import instance from "../../components/firebase/instance";
const CartDrawer = ({ product, open, setopen }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNumberItems, setTotalNumberItems] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const startRef = ref(StartFirebase(), "Cart");
    let price = 0;
    let arr = [];
    let totalNumber = 0;
    onValue(startRef, (snapshot) => {
      const res = snapshot.val();
      const currentUserId = getCurrentUser().uid;
      Object.values(res)
        .filter((el) => el.userId == currentUserId)
        .map((el) => {
          arr.push(el);
          price += el.price * el.quantity;
          totalNumber += Number(el.quantity);
        });
      setTotalPrice(price.toFixed(2));
      setTotalNumberItems(totalNumber);
      setCartItems(arr);
    });
  }, []);
  const handleGoToCart = (e) => {
    // e.preventDefault();
    e.stopPropagation();
    navigate("/Cart");
  };
  return (
    <StyledDrawer anchor="right" open={open} onClose={() => setopen(false)}>
      <StyledOuterBackBox>
        <InnerDrawerBox>
          <CheckCircleOutlineOutlinedIcon sx={{ color: "green" }} />
          <StyledImageDrawerBox>
            <AddedTypo> Added to Cart</AddedTypo>
            <StyledSideDrawerImage
              sx={{ backgroundImage: `url(${product.image})` }}
            ></StyledSideDrawerImage>
          </StyledImageDrawerBox>

          <DrawerOuterButtonsBox>
            <StyledBtnTitle>
              Cart Subtotal ({totalNumberItems} items): ${totalPrice}
            </StyledBtnTitle>
            <DrawerButtonsBox>
              <CartBtn onClick={handleGoToCart}>Cart</CartBtn>
              <ProceedCheckoutBtn>Proceed to Checkout</ProceedCheckoutBtn>
            </DrawerButtonsBox>
          </DrawerOuterButtonsBox>
        </InnerDrawerBox>
      </StyledOuterBackBox>
    </StyledDrawer>
  );
};
const RightCard = ({ product }) => {
  const [quantity, setquantity] = useState(1);
  const [open, setopen] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setquantity(e.target.value);
  };

  const getSelectedKey = (user, product) => {
    return instance.get("/Cart.json").then((response) => {
      console.log(response.data);
      console.log(product);
      const fetchedResults = [];
      for (let key in response.data) {
        if (
          response.data[key].title == product.title &&
          response.data[key].userId == user.uid &&
          key !== "undefined"
        ) {
          return key;
        }
        fetchedResults.push(response.data[key]);
      }
    });
  };
  const handleAddToCart = async (e) => {
    e.preventDefault();
    const user = await getCurrentUser();

    const obj = { ...product, userId: user.uid, quantity: Number(quantity) };

    if (user) {
      let value = getSelectedKey(user, product).then((res) => {
        if (res) {
          instance
            .put(`Cart/${res}.json`, obj)
            .then((res) => console.log(res.data));
          setopen(true);
        } else {
          instance
            .post("./Cart.json", obj)
            .then((res) => console.log(res.data));
          setopen(true);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Please Login",
      });
      navigate("/login");
    }
  };

  return (
    <StyledCard>
      <StyledCartBox>
        <Typography variant="caption" pr={0}>
          $
        </Typography>
        <StyledPriceTypo>
          {product.price.toString().split(".")[0]}
        </StyledPriceTypo>
        <Typography variant="caption">
          {product.price.toString().split(".")[1]}
        </Typography>
      </StyledCartBox>
      <StyledFlexBox>
        <LocationOnOutlinedIcon color="gray" />
        <SharedLink title="Deliver to Palestinian Territories" />
      </StyledFlexBox>
      <StyledInStockTypo>In Stock</StyledInStockTypo>
      <StyledFormControl variant="standard">
        <StyledInputLabel shrink htmlFor="quantity-input">
          Quantity
        </StyledInputLabel>
        <TextInput
          name="quantity"
          type="number"
          id="quantity-input"
          inputProps={{ min: 1 }}
          defaultValue={1}
          value={quantity}
          onChange={(e) => handleChange(e)}
        />
      </StyledFormControl>
      <StyledCartButton onClick={(e) => handleAddToCart(e, product)}>
        Add To cart
      </StyledCartButton>
      <StyledCartButton>Shop Now</StyledCartButton>
      <CartDrawer product={product} open={open} setopen={setopen} />
    </StyledCard>
  );
};
export default RightCard;
