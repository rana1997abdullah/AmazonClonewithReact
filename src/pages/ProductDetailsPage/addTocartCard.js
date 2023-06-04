import { Typography } from "@mui/material";
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
} from "./styles";
import { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SharedLink from "../../components/StyledLink";
import { getCurrentUser } from "../../components/firebase";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import instance from "../../components/firebase/instance";
import CartDrawer from "./CartDrawer";

const RightCard = ({ product }) => {
  const [quantity, setquantity] = useState(1);
  const [open, setopen] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setquantity(e.target.value);
  };

  const getSelectedKey = (user, product) => {
    return instance.get("/Cart.json").then((response) => {
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

    if (user) {
      const obj = { ...product, userId: user.uid, quantity: Number(quantity) };
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
